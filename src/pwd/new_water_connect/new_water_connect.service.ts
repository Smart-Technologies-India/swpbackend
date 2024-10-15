import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateNewWaterConnectInput } from './dto/create-new_water_connect.input';
import { UpdateNewWaterConnectInput } from './dto/update-new_water_connect.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class NewWaterConnectService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllNewWaterConnect() {
    const newWaterConnect = await this.prisma.new_water_connection.findMany({
      where: { deletedAt: null },
      orderBy: {
        updatedAt: 'desc',
      },
    });
    if (newWaterConnect.length == 0)
      throw new BadRequestException('There is no newWaterConnect.');
    return newWaterConnect;
  }

  async getNewWaterConnectById(id: number) {
    const newWaterConnect = await this.prisma.new_water_connection.findFirst({
      where: { id, deletedAt: null },
    });
    if (!newWaterConnect)
      throw new BadRequestException(
        'No Temp Water Connect exist with this id.',
      );
    return newWaterConnect;
  }

  async createNewWaterConnect(newWaterConnect: CreateNewWaterConnectInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(newWaterConnect)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const NewWaterConnect = await this.prisma.new_water_connection.create({
      data: dataToCreate,
    });

    if (!NewWaterConnect)
      throw new BadRequestException('Unable to create Temp Water Connect');
    return NewWaterConnect;
  }

  async updateNewWaterConnectById(newWaterConnect: UpdateNewWaterConnectInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(newWaterConnect)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.new_water_connection.findUnique({
      where: { id: newWaterConnect.id },
    });

    if (!existingUser) {
      throw new NotFoundException(
        `Temp Water Connect with id ${newWaterConnect.id} not found`,
      );
    }

    const updatednewWaterConnect = this.prisma.new_water_connection.update({
      where: { id: newWaterConnect.id },
      data: dataToUpdate,
    });
    if (!updatednewWaterConnect)
      throw new BadRequestException('Unable to update Temp Water Connect.');
    return updatednewWaterConnect;
  }

  async deleteNewWaterConnectById(newWaterConnect: UpdateNewWaterConnectInput) {
    const existing = await this.prisma.new_water_connection.findUnique({
      where: { id: newWaterConnect.id },
    });

    if (!existing) {
      throw new NotFoundException(
        `Temp Water Connection with id ${newWaterConnect.id} not found`,
      );
    }

    const deleteNewWaterConnect = this.prisma.new_water_connection.update({
      where: { id: newWaterConnect.id },
      data: { deletedAt: newWaterConnect.deletedAt },
    });

    if (!deleteNewWaterConnect)
      throw new BadRequestException('Unable to update Temp Water Connect.');
    return deleteNewWaterConnect;
  }
}
