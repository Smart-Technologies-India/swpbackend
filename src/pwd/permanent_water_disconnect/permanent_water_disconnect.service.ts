import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePermanentWaterDisconnectInput } from './dto/create-permanent_water_disconnect.input';
import { UpdatePermanentWaterDisconnectInput } from './dto/update-permanent_water_disconnect.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PermanentWaterDisconnectService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllPermanentWaterDisconnect() {
    const permanentWaterDisconnect =
      await this.prisma.permanent_water_disconnect.findMany({
        where: { deletedAt: null },
        orderBy: {
          updatedAt: 'desc',
        },
      });
    if (permanentWaterDisconnect.length == 0)
      throw new BadRequestException('There is no Permanent Water Disconnect.');
    return permanentWaterDisconnect;
  }

  async getPermanentWaterDisconnectById(id: number) {
    const permanentWaterDisconnect =
      await this.prisma.permanent_water_disconnect.findFirst({
        where: { id, deletedAt: null },
      });
    if (!permanentWaterDisconnect)
      throw new BadRequestException(
        'No Permanent Water Disconnect exist with this id.',
      );
    return permanentWaterDisconnect;
  }

  async createPermanentWaterDisconnect(
    permanentWaterDisconnect: CreatePermanentWaterDisconnectInput,
  ) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(permanentWaterDisconnect)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const PermanentWaterDisconnect =
      await this.prisma.permanent_water_disconnect.create({
        data: dataToCreate,
      });

    if (!PermanentWaterDisconnect)
      throw new BadRequestException(
        'Unable to create Permanent Water Disconnect',
      );
    return PermanentWaterDisconnect;
  }

  async updatePermanentWaterDisconnectById(
    permanentWaterDisconnect: UpdatePermanentWaterDisconnectInput,
  ) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(permanentWaterDisconnect)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser =
      await this.prisma.permanent_water_disconnect.findUnique({
        where: { id: permanentWaterDisconnect.id },
      });

    if (!existingUser) {
      throw new NotFoundException(
        `Permanent Water Disconnect with id ${permanentWaterDisconnect.id} not found`,
      );
    }

    const updatedpermanentWaterDisconnect =
      this.prisma.permanent_water_disconnect.update({
        where: { id: permanentWaterDisconnect.id },
        data: dataToUpdate,
      });
    if (!updatedpermanentWaterDisconnect)
      throw new BadRequestException(
        'Unable to update Permanent Water Disonnect.',
      );
    return updatedpermanentWaterDisconnect;
  }

  async deletePermanentWaterDisconnectById(
    permanentWaterDisconnect: UpdatePermanentWaterDisconnectInput,
  ) {
    const existing = await this.prisma.permanent_water_disconnect.findUnique({
      where: { id: permanentWaterDisconnect.id },
    });

    if (!existing) {
      throw new NotFoundException(
        `Permanent Water Connection with id ${permanentWaterDisconnect.id} not found`,
      );
    }

    const deletePermanentWaterDisconnect =
      this.prisma.permanent_water_disconnect.update({
        where: { id: permanentWaterDisconnect.id },
        data: { deletedAt: permanentWaterDisconnect.deletedAt },
      });

    if (!deletePermanentWaterDisconnect)
      throw new BadRequestException(
        'Unable to update Permanent Water Disconnect.',
      );
    return deletePermanentWaterDisconnect;
  }
}
