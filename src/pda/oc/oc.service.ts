import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateOcInput } from './dto/create-oc.input';
import { UpdateOcInput } from './dto/update-oc.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class OcService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllOc() {
    const oc = await this.prisma.oc_form.findMany({
      where: { deletedAt: null },
    });
    if (oc.length == 0) throw new BadRequestException('There is no oc.');
    return oc;
  }

  async getOcById(id: number) {
    const oc = await this.prisma.oc_form.findFirst({
      where: { id, deletedAt: null },
    });
    if (!oc) throw new BadRequestException('No oc exist with this id.');
    return oc;
  }

  async createOc(oc: CreateOcInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(oc)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Oc = await this.prisma.oc_form.create({
      data: dataToCreate,
    });

    if (!Oc) throw new BadRequestException('Unable to create oc');
    return Oc;
  }

  async updateOcById(oc: UpdateOcInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(oc)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.oc_form.findUnique({
      where: { id: oc.id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Old copy with id ${oc.id} not found`);
    }

    const updatedoc = this.prisma.oc_form.update({
      where: { id: oc.id },
      data: dataToUpdate,
    });
    if (!updatedoc) throw new BadRequestException('Unable to update oc.');
    return updatedoc;
  }

  async deleteOcById(oc: UpdateOcInput) {
    const existing = await this.prisma.oc_form.findUnique({
      where: { id: oc.id },
    });

    if (!existing) {
      throw new NotFoundException(`Old copy with id ${oc.id} not found`);
    }

    const deleteOc = this.prisma.oc_form.update({
      where: { id: oc.id },
      data: { deletedAt: oc.deletedAt },
    });

    if (!deleteOc) throw new BadRequestException('Unable to update oc.');
    return deleteOc;
  }
}
