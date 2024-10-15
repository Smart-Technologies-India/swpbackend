import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDeathTeorInput } from './dto/create-death_teor.input';
import { UpdateDeathTeorInput } from './dto/update-death_teor.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class DeathTeorService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllDeathTeor() {
    const deathTeor = await this.prisma.death_teor.findMany({
      where: { deletedAt: null },
      orderBy: {
        updatedAt: 'desc',
      },
    });
    if (deathTeor.length == 0)
      throw new BadRequestException('There is no Death Teor.');
    return deathTeor;
  }

  async getDeathTeorById(id: number) {
    const deathTeor = await this.prisma.death_teor.findFirst({
      where: { id, deletedAt: null },
    });
    if (!deathTeor)
      throw new BadRequestException('No Death Teor exist with this id.');
    return deathTeor;
  }

  async createDeathTeor(deathTeor: CreateDeathTeorInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(deathTeor)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const DeathTeor = await this.prisma.death_teor.create({
      data: dataToCreate,
    });

    if (!DeathTeor)
      throw new BadRequestException('Unable to create Death Teor');
    return DeathTeor;
  }

  async updateDeathTeorById(deathTeor: UpdateDeathTeorInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(deathTeor)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.death_teor.findUnique({
      where: { id: deathTeor.id },
    });

    if (!existingUser) {
      throw new NotFoundException(
        `Death Teor with id ${deathTeor.id} not found`,
      );
    }

    const updateddeathTeor = this.prisma.death_teor.update({
      where: { id: deathTeor.id },
      data: dataToUpdate,
    });
    if (!updateddeathTeor)
      throw new BadRequestException('Unable to update Death Teor.');
    return updateddeathTeor;
  }

  async deleteDeathTeorById(deathTeor: UpdateDeathTeorInput) {
    const existing = await this.prisma.death_teor.findUnique({
      where: { id: deathTeor.id },
    });

    if (!existing) {
      throw new NotFoundException(
        `Death Teor with id ${deathTeor.id} not found`,
      );
    }

    const deleteDeathTeor = this.prisma.death_teor.update({
      where: { id: deathTeor.id },
      data: { deletedAt: deathTeor.deletedAt },
    });

    if (!deleteDeathTeor)
      throw new BadRequestException('Unable to update Death Teor.');
    return deleteDeathTeor;
  }
}
