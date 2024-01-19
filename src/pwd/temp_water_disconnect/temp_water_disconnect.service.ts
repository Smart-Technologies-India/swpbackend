import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTempWaterDisconnectInput } from './dto/create-temp_water_disconnect.input';
import { UpdateTempWaterDisconnectInput } from './dto/update-temp_water_disconnect.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class TempWaterDisconnectService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllTempWaterDisconnect() {
    const tempWaterDisconnect =
      await this.prisma.temp_water_disconnect.findMany({
        where: { deletedAt: null },
      });
    if (tempWaterDisconnect.length == 0)
      throw new BadRequestException('There is no Temp Water Disconnect.');
    return tempWaterDisconnect;
  }

  async getTempWaterDisconnectById(id: number) {
    const tempWaterDisconnect =
      await this.prisma.temp_water_disconnect.findFirst({
        where: { id, deletedAt: null },
      });
    if (!tempWaterDisconnect)
      throw new BadRequestException(
        'No Temp Water Disconnect exist with this id.',
      );
    return tempWaterDisconnect;
  }

  async createTempWaterDisconnect(
    tempWaterDisconnect: CreateTempWaterDisconnectInput,
  ) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(tempWaterDisconnect)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const TempWaterDisconnect = await this.prisma.temp_water_disconnect.create({
      data: dataToCreate,
    });

    if (!TempWaterDisconnect)
      throw new BadRequestException('Unable to create Temp Water Disconnect');
    return TempWaterDisconnect;
  }

  async updateTempWaterDisconnectById(
    tempWaterDisconnect: UpdateTempWaterDisconnectInput,
  ) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(tempWaterDisconnect)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.temp_water_disconnect.findUnique({
      where: { id: tempWaterDisconnect.id },
    });

    if (!existingUser) {
      throw new NotFoundException(
        `Temp Water Disconnect with id ${tempWaterDisconnect.id} not found`,
      );
    }

    const updatedtempWaterDisconnect = this.prisma.temp_water_disconnect.update(
      {
        where: { id: tempWaterDisconnect.id },
        data: dataToUpdate,
      },
    );
    if (!updatedtempWaterDisconnect)
      throw new BadRequestException('Unable to update Temp Water Disonnect.');
    return updatedtempWaterDisconnect;
  }

  async deleteTempWaterDisconnectById(
    tempWaterDisconnect: UpdateTempWaterDisconnectInput,
  ) {
    const existing = await this.prisma.temp_water_disconnect.findUnique({
      where: { id: tempWaterDisconnect.id },
    });

    if (!existing) {
      throw new NotFoundException(
        `Temp Water Connection with id ${tempWaterDisconnect.id} not found`,
      );
    }

    const deleteTempWaterDisconnect = this.prisma.temp_water_disconnect.update({
      where: { id: tempWaterDisconnect.id },
      data: { deletedAt: tempWaterDisconnect.deletedAt },
    });

    if (!deleteTempWaterDisconnect)
      throw new BadRequestException('Unable to update Temp Water Disconnect.');
    return deleteTempWaterDisconnect;
  }
}
