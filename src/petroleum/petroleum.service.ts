import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePetroleumInput } from './dto/create-petroleum.input';
import { UpdatePetroleumInput } from './dto/update-petroleum.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PetroleumService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllPetroleum() {
    const petroleum = await this.prisma.petroleum_form.findMany({
      where: { deletedAt: null },
    });
    if (petroleum.length == 0)
      throw new BadRequestException('There is no petroleum.');
    return petroleum;
  }

  async getPetroleumById(id: number) {
    const petroleum = await this.prisma.petroleum_form.findFirst({
      where: { id, deletedAt: null },
    });
    if (!petroleum)
      throw new BadRequestException('No petroleum exist with this id.');
    return petroleum;
  }

  async createPetroleum(petroleum: CreatePetroleumInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(petroleum)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Petroleum = await this.prisma.petroleum_form.create({
      data: dataToCreate,
    });

    if (!Petroleum) throw new BadRequestException('Unable to create petroleum');
    return Petroleum;
  }

  async updatePetroleumById(petroleum: UpdatePetroleumInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(petroleum)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.petroleum_form.findUnique({
      where: { id: petroleum.id },
    });

    if (!existingUser) {
      throw new NotFoundException(
        `Petroleum with id ${petroleum.id} not found`,
      );
    }

    const updatedpetroleum = this.prisma.petroleum_form.update({
      where: { id: petroleum.id },
      data: dataToUpdate,
    });
    if (!updatedpetroleum)
      throw new BadRequestException('Unable to update petroleum.');
    return updatedpetroleum;
  }

  async deletePetroleumById(petroleum: UpdatePetroleumInput) {
    const existing = await this.prisma.petroleum_form.findUnique({
      where: { id: petroleum.id },
    });

    if (!existing) {
      throw new NotFoundException(
        `Petroleum with id ${petroleum.id} not found`,
      );
    }

    const deletePetroleum = this.prisma.petroleum_form.update({
      where: { id: petroleum.id },
      data: { deletedAt: petroleum.deletedAt },
    });

    if (!deletePetroleum)
      throw new BadRequestException('Unable to update petroleum.');
    return deletePetroleum;
  }
}
