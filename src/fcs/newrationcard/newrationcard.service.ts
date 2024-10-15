import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateNewrationcardInput } from './dto/create-newrationcard.input';
import { UpdateNewrationcardInput } from './dto/update-newrationcard.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class NewrationcardService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllRationCard() {
    const rationcard = await this.prisma.new_rationcard.findMany({
      where: { deletedAt: null },
      orderBy: {
        updatedAt: 'desc',
      },
    });
    if (rationcard.length == 0)
      throw new BadRequestException('There is no ration card.');
    return rationcard;
  }

  async getRationCardById(id: number) {
    const rationcard = await this.prisma.new_rationcard.findFirst({
      where: { id, deletedAt: null },
      include: {
        members: true,
      },
    });

    console.log(rationcard);
    if (!rationcard)
      throw new BadRequestException('No ration card exist with this id.');
    return rationcard;
  }

  async createRationCard(rationcard: CreateNewrationcardInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(rationcard)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const RationCard = await this.prisma.new_rationcard.create({
      data: dataToCreate,
    });

    if (!RationCard)
      throw new BadRequestException('Unable to create ration card.');
    return RationCard;
  }

  async updateRationCardById(rationcard: UpdateNewrationcardInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(rationcard)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.new_rationcard.findUnique({
      where: { id: rationcard.id },
    });

    if (!existingUser) {
      throw new NotFoundException(
        `Ration Card with id ${rationcard.id} not found`,
      );
    }

    const updatedRationCard = this.prisma.new_rationcard.update({
      where: { id: rationcard.id },
      data: dataToUpdate,
    });
    if (!updatedRationCard)
      throw new BadRequestException('Unable to update ration card.');
    return updatedRationCard;
  }

  async deleteRationCardById(rationcard: UpdateNewrationcardInput) {
    const existing = await this.prisma.new_rationcard.findUnique({
      where: { id: rationcard.id },
    });

    if (!existing) {
      throw new NotFoundException(
        `Ration Card with id ${rationcard.id} not found`,
      );
    }

    const deleteRationCard = this.prisma.new_rationcard.update({
      where: { id: rationcard.id },
      data: { deletedAt: rationcard.deletedAt },
    });

    if (!deleteRationCard)
      throw new BadRequestException('Unable to delete ration card.');
    return deleteRationCard;
  }
}
