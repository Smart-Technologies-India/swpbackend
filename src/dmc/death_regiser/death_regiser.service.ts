import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDeathRegiserInput } from './dto/create-death_regiser.input';
import { UpdateDeathRegiserInput } from './dto/update-death_regiser.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class DeathRegiserService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllDeathRegister() {
    const deathbegister = await this.prisma.death_regiser.findMany({
      where: { deletedAt: null },
      orderBy: {
        updatedAt: 'desc',
      },
    });
    if (deathbegister.length == 0)
      throw new BadRequestException('There is no deathbegister.');
    return deathbegister;
  }

  async getDeathRegisterById(id: number) {
    const deathbegister = await this.prisma.death_regiser.findFirst({
      where: { id, deletedAt: null },
    });
    if (!deathbegister)
      throw new BadRequestException('No deathbegister exist with this id.');
    return deathbegister;
  }

  async createDeathRegister(deathbegister: CreateDeathRegiserInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(deathbegister)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const DeathRegister = await this.prisma.death_regiser.create({
      data: dataToCreate,
    });

    if (!DeathRegister)
      throw new BadRequestException('Unable to create deathbegister');
    return DeathRegister;
  }

  async updateDeathRegisterById(deathbegister: UpdateDeathRegiserInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(deathbegister)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.death_regiser.findUnique({
      where: { id: deathbegister.id },
    });

    if (!existingUser) {
      throw new NotFoundException(
        `Old copy with id ${deathbegister.id} not found`,
      );
    }

    const updateddeathbegister = this.prisma.death_regiser.update({
      where: { id: deathbegister.id },
      data: dataToUpdate,
    });
    if (!updateddeathbegister)
      throw new BadRequestException('Unable to update deathbegister.');
    return updateddeathbegister;
  }

  async deleteDeathRegisterById(deathbegister: UpdateDeathRegiserInput) {
    const existing = await this.prisma.death_regiser.findUnique({
      where: { id: deathbegister.id },
    });

    if (!existing) {
      throw new NotFoundException(
        `Old copy with id ${deathbegister.id} not found`,
      );
    }

    const deleteDeathRegister = this.prisma.death_regiser.update({
      where: { id: deathbegister.id },
      data: { deletedAt: deathbegister.deletedAt },
    });

    if (!deleteDeathRegister)
      throw new BadRequestException('Unable to update deathbegister.');
    return deleteDeathRegister;
  }
}
