import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateLandsectionInput } from './dto/create-landsection.input';
import { UpdateLandsectionInput } from './dto/update-landsection.input';
import { PrismaService } from 'prisma/prisma.service';
import { OutsideLandsectionInput } from './dto/outside-landsection.input';
import { domainToUnicode } from 'url';
import { common } from '@prisma/client';
import { CommonService } from 'src/common/common.service';
import { CreateCommonInput } from 'src/common/dto/create-common.input';
import { SendFileLandsectionInput } from './dto/sendfile-landsection.input';
import axios from 'axios';
import { DealinghandService } from 'src/dealinghand/dealinghand.service';

@Injectable()
export class LandsectionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly dealinghand: DealinghandService,
  ) {}

  async getAllLand() {
    const land = await this.prisma.land_section_form.findMany({
      where: { deletedAt: null },
    });
    if (land.length == 0) throw new BadRequestException('There is no rti.');
    return land;
  }

  async getAllLandById(id: number) {
    const land = await this.prisma.land_section_form.findFirst({
      where: { id, deletedAt: null },
    });
    if (!land) throw new BadRequestException('No land exist with this id.');
    return land;
  }

  async createLand(land: CreateLandsectionInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(land)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Land = await this.prisma.land_section_form.create({
      data: dataToCreate,
    });

    if (!Land) throw new BadRequestException('Unable to create land');
    return Land;
  }

  async updateLandById(land: UpdateLandsectionInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(land)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.land_section_form.findUnique({
      where: { id: land.id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Land section with id ${land.id} not found`);
    }

    const updatedland = this.prisma.land_section_form.update({
      where: { id: land.id },
      data: dataToUpdate,
    });
    if (!updatedland) throw new BadRequestException('Unable to update land.');
    return updatedland;
  }

  async deleteLandById(land: UpdateLandsectionInput) {
    const existing = await this.prisma.land_section_form.findUnique({
      where: { id: land.id },
    });

    if (!existing) {
      throw new NotFoundException(`Rti with id ${land.id} not found`);
    }

    const deleteLand = this.prisma.land_section_form.update({
      where: { id: land.id },
      data: { deletedAt: land.deletedAt },
    });

    if (!deleteLand) throw new BadRequestException('Unable to update land.');
    return deleteLand;
  }

  async getFromOutside(outside: OutsideLandsectionInput) {
    const land = await this.prisma.land_section_form.create({
      data: {
        na_type: outside.purpose,
        village_id: outside.village_id,
        land_formid: outside.form_id,
        land_stageid: outside.stage_id,
        survey_no: outside.survey_no,
        area: outside.area,
        mobile: outside.number,
        name: outside.name,
      },
    });

    if (!land)
      throw new BadRequestException('Unable to create land section form');

    const village = await this.prisma.village.findFirst({
      where: { id: outside.village_id },
    });

    if (!village)
      throw new BadRequestException('Unable to find village with this id');

    const auth_id = await this.dealinghand.getuserid('LANDRECORDS');

    const common: common = await this.prisma.common.create({
      data: {
        form_id: land.id,
        auth_user_id: auth_id.toString(),
        focal_user_id: '5',
        intra_user_id: '3,4',
        inter_user_id: '0',
        village: village.name,
        name: land.name,
        number: land.mobile,
        form_status: 1,
        query_status: 'SUBMIT',
        status: 'ACTIVE',
        form_type: 'LANDRECORDS',
        user: { connect: { id: 20 } },
      },
    });

    if (!common)
      throw new BadRequestException(
        'Unable to create common table with this id',
      );

    return common;
  }
  async sendFileOutside(sendFileLandsectionInput: SendFileLandsectionInput) {
    const req = {
      stageId: sendFileLandsectionInput.stageId,
      formRefId: sendFileLandsectionInput.formRefId,
      fromUserId: '6',
      toUserId: '8',
      documentUrl: sendFileLandsectionInput.documentUrl,
      remarkComment: 'Attached scrutiny report from PDA.',
      queryType: '20',
      refFormActionId: '1',
      queryStatus: 1,
    };
    const response = await axios.post(
      'https://www.bluelemontech.in/websites/ci4-land/cus-add-query',
      req,
    );
    return response.data.status;
  }

  async sendFileOutsideillegal(
    sendFileLandsectionInput: SendFileLandsectionInput,
  ) {
    const req = {
      stageId: sendFileLandsectionInput.stageId,
      formRefId: sendFileLandsectionInput.formRefId,
      fromUserId: '6',
      toUserId: '8',
      documentUrl: sendFileLandsectionInput.documentUrl,
      remarkComment: 'Illegal construction found on the premisis. Attached photographs of the illegal construction on the site.',
      queryType: '20',
      refFormActionId: '1',
      queryStatus: 1,
    };
    const response = await axios.post(
      'https://www.bluelemontech.in/websites/ci4-land/cus-add-query',
      req,
    );
    return response.data.status;
  }
}
