import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTempWaterConnectInput } from './dto/create-temp_water_connect.input';
import { UpdateTempWaterConnectInput } from './dto/update-temp_water_connect.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class TempWaterConnectService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllTempWaterConnect() {
    const tempWaterConnect = await this.prisma.temp_water_connect_form.findMany(
      {
        where: { deletedAt: null },
        orderBy: {
          updatedAt: 'desc',
        },
      },
    );
    if (tempWaterConnect.length == 0)
      throw new BadRequestException('There is no tempWaterConnect.');
    return tempWaterConnect;
  }

  async getTempWaterConnectById(id: number) {
    const tempWaterConnect =
      await this.prisma.temp_water_connect_form.findFirst({
        where: { id, deletedAt: null },
      });
    if (!tempWaterConnect)
      throw new BadRequestException(
        'No Temp Water Connect exist with this id.',
      );
    return tempWaterConnect;
  }

  async createTempWaterConnect(tempWaterConnect: CreateTempWaterConnectInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(tempWaterConnect)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const TempWaterConnect = await this.prisma.temp_water_connect_form.create({
      data: dataToCreate,
    });

    if (!TempWaterConnect)
      throw new BadRequestException('Unable to create Temp Water Connect');
    return TempWaterConnect;
  }

  async updateTempWaterConnectById(
    tempWaterConnect: UpdateTempWaterConnectInput,
  ) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(tempWaterConnect)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.temp_water_connect_form.findUnique({
      where: { id: tempWaterConnect.id },
    });

    if (!existingUser) {
      throw new NotFoundException(
        `Temp Water Connect with id ${tempWaterConnect.id} not found`,
      );
    }

    const updatedtempWaterConnect = this.prisma.temp_water_connect_form.update({
      where: { id: tempWaterConnect.id },
      data: dataToUpdate,
    });
    if (!updatedtempWaterConnect)
      throw new BadRequestException('Unable to update Temp Water Connect.');
    return updatedtempWaterConnect;
  }

  async deleteTempWaterConnectById(
    tempWaterConnect: UpdateTempWaterConnectInput,
  ) {
    const existing = await this.prisma.temp_water_connect_form.findUnique({
      where: { id: tempWaterConnect.id },
    });

    if (!existing) {
      throw new NotFoundException(
        `Temp Water Connection with id ${tempWaterConnect.id} not found`,
      );
    }

    const deleteTempWaterConnect = this.prisma.temp_water_connect_form.update({
      where: { id: tempWaterConnect.id },
      data: { deletedAt: tempWaterConnect.deletedAt },
    });

    if (!deleteTempWaterConnect)
      throw new BadRequestException('Unable to update Temp Water Connect.');
    return deleteTempWaterConnect;
  }
}
