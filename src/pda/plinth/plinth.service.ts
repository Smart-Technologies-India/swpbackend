import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlinthInput } from './dto/create-plinth.input';
import { UpdatePlinthInput } from './dto/update-plinth.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PlinthService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllPlinth() {
    const plinth = await this.prisma.plinth_form.findMany({
      where: { deletedAt: null },
    });
    if (plinth.length == 0) throw new BadRequestException('There is no plinth.');
    return plinth;
  }

  async getPlinthById(id: number) {
    const plinth = await this.prisma.plinth_form.findFirst({
      where: { id, deletedAt: null },
    });
    if (!plinth) throw new BadRequestException('No plinth exist with this id.');
    return plinth;
  }

  async createPlinth(plinth: CreatePlinthInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(plinth)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Plinth = await this.prisma.plinth_form.create({
      data: dataToCreate,
    });

    if (!Plinth) throw new BadRequestException('Unable to create plinth');
    return Plinth;
  }

  async updatePlinthById(plinth: UpdatePlinthInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(plinth)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.plinth_form.findUnique({
      where: { id: plinth.id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Old copy with id ${plinth.id} not found`);
    }

    const updatedplinth = this.prisma.plinth_form.update({
      where: { id: plinth.id },
      data: dataToUpdate,
    });
    if (!updatedplinth) throw new BadRequestException('Unable to update plinth.');
    return updatedplinth;
  }

  async deletePlinthById(plinth: UpdatePlinthInput) {
    const existing = await this.prisma.plinth_form.findUnique({
      where: { id: plinth.id },
    });

    if (!existing) {
      throw new NotFoundException(`Old copy with id ${plinth.id} not found`);
    }

    const deletePlinth = this.prisma.plinth_form.update({
      where: { id: plinth.id },
      data: { deletedAt: plinth.deletedAt },
    });

    if (!deletePlinth) throw new BadRequestException('Unable to update plinth.');
    return deletePlinth;
  }
}
