import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateWaterReconnectInput } from './dto/create-water_reconnect.input';
import { UpdateWaterReconnectInput } from './dto/update-water_reconnect.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class WaterReconnectService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllWaterReconnect() {
    const waterReconnect = await this.prisma.water_reconnect.findMany({
      where: { deletedAt: null },
    });
    if (waterReconnect.length == 0)
      throw new BadRequestException('There is no Water Reconnect.');
    return waterReconnect;
  }

  async getWaterReconnectById(id: number) {
    const waterReconnect = await this.prisma.water_reconnect.findFirst({
      where: { id, deletedAt: null },
    });
    if (!waterReconnect)
      throw new BadRequestException('No Water Reconnect exist with this id.');
    return waterReconnect;
  }

  async createWaterReconnect(waterReconnect: CreateWaterReconnectInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(waterReconnect)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const WaterReconnect = await this.prisma.water_reconnect.create({
      data: dataToCreate,
    });

    if (!WaterReconnect)
      throw new BadRequestException('Unable to create Water Reconnect');
    return WaterReconnect;
  }

  async updateWaterReconnectById(waterReconnect: UpdateWaterReconnectInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(waterReconnect)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.water_reconnect.findUnique({
      where: { id: waterReconnect.id },
    });

    if (!existingUser) {
      throw new NotFoundException(
        `Water Reconnect with id ${waterReconnect.id} not found`,
      );
    }

    const updatedwaterReconnect = this.prisma.water_reconnect.update({
      where: { id: waterReconnect.id },
      data: dataToUpdate,
    });
    if (!updatedwaterReconnect)
      throw new BadRequestException(
        'Unable to update Permanent Water Disonnect.',
      );
    return updatedwaterReconnect;
  }

  async deleteWaterReconnectById(waterReconnect: UpdateWaterReconnectInput) {
    const existing = await this.prisma.water_reconnect.findUnique({
      where: { id: waterReconnect.id },
    });

    if (!existing) {
      throw new NotFoundException(
        `Permanent Water Connection with id ${waterReconnect.id} not found`,
      );
    }

    const deleteWaterReconnect = this.prisma.water_reconnect.update({
      where: { id: waterReconnect.id },
      data: { deletedAt: waterReconnect.deletedAt },
    });

    if (!deleteWaterReconnect)
      throw new BadRequestException('Unable to update Water Reconnect.');
    return deleteWaterReconnect;
  }
}
