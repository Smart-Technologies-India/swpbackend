import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateWaterSizeChangeInput } from './dto/create-water_size_change.input';
import { UpdateWaterSizeChangeInput } from './dto/update-water_size_change.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class WaterSizeChangeService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllWaterSizeChange() {
    const waterSizeChange =
      await this.prisma.water_size_change.findMany({
        where: { deletedAt: null },
      });
    if (waterSizeChange.length == 0)
      throw new BadRequestException('There is no Water Size Change.');
    return waterSizeChange;
  }

  async getWaterSizeChangeById(id: number) {
    const waterSizeChange =
      await this.prisma.water_size_change.findFirst({
        where: { id, deletedAt: null },
      });
    if (!waterSizeChange)
      throw new BadRequestException(
        'No Water Size Change exist with this id.',
      );
    return waterSizeChange;
  }

  async createWaterSizeChange(
    waterSizeChange: CreateWaterSizeChangeInput,
  ) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(waterSizeChange)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const WaterSizeChange =
      await this.prisma.water_size_change.create({
        data: dataToCreate,
      });

    if (!WaterSizeChange)
      throw new BadRequestException(
        'Unable to create Water Size Change',
      );
    return WaterSizeChange;
  }

  async updateWaterSizeChangeById(
    waterSizeChange: UpdateWaterSizeChangeInput,
  ) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(waterSizeChange)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.water_size_change.findUnique({
      where: { id: waterSizeChange.id },
    });

    if (!existingUser) {
      throw new NotFoundException(
        `Water Size Change with id ${waterSizeChange.id} not found`,
      );
    }

    const updatedwaterSizeChange =
      this.prisma.water_size_change.update({
        where: { id: waterSizeChange.id },
        data: dataToUpdate,
      });
    if (!updatedwaterSizeChange)
      throw new BadRequestException(
        'Unable to update Permanent Water Disonnect.',
      );
    return updatedwaterSizeChange;
  }

  async deleteWaterSizeChangeById(
    waterSizeChange: UpdateWaterSizeChangeInput,
  ) {
    const existing = await this.prisma.water_size_change.findUnique({
      where: { id: waterSizeChange.id },
    });

    if (!existing) {
      throw new NotFoundException(
        `Permanent Water Connection with id ${waterSizeChange.id} not found`,
      );
    }

    const deleteWaterSizeChange =
      this.prisma.water_size_change.update({
        where: { id: waterSizeChange.id },
        data: { deletedAt: waterSizeChange.deletedAt },
      });

    if (!deleteWaterSizeChange)
      throw new BadRequestException(
        'Unable to update Water Size Change.',
      );
    return deleteWaterSizeChange;
  }
}
