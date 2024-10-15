import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMarriageTeorInput } from './dto/create-marriage_teor.input';
import { UpdateMarriageTeorInput } from './dto/update-marriage_teor.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class MarriageTeorService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllMarriageTeor() {
    const marriageTeor = await this.prisma.marriage_teor.findMany({
      where: { deletedAt: null },
      orderBy: {
        updatedAt: 'desc',
      },
    });
    if (marriageTeor.length == 0)
      throw new BadRequestException('There is no Marriage Teor.');
    return marriageTeor;
  }

  async getMarriageTeorById(id: number) {
    const marriageTeor = await this.prisma.marriage_teor.findFirst({
      where: { id, deletedAt: null },
    });
    if (!marriageTeor)
      throw new BadRequestException('No Marriage Teor exist with this id.');
    return marriageTeor;
  }

  async createMarriageTeor(marriageTeor: CreateMarriageTeorInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(marriageTeor)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const MarriageTeor = await this.prisma.marriage_teor.create({
      data: dataToCreate,
    });

    if (!MarriageTeor)
      throw new BadRequestException('Unable to create Marriage Teor');
    return MarriageTeor;
  }

  async updateMarriageTeorById(marriageTeor: UpdateMarriageTeorInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(marriageTeor)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.marriage_teor.findUnique({
      where: { id: marriageTeor.id },
    });

    if (!existingUser) {
      throw new NotFoundException(
        `Marriage Teor with id ${marriageTeor.id} not found`,
      );
    }

    const updatedmarriageTeor = this.prisma.marriage_teor.update({
      where: { id: marriageTeor.id },
      data: dataToUpdate,
    });
    if (!updatedmarriageTeor)
      throw new BadRequestException('Unable to update Marriage Teor.');
    return updatedmarriageTeor;
  }

  async deleteMarriageTeorById(marriageTeor: UpdateMarriageTeorInput) {
    const existing = await this.prisma.marriage_teor.findUnique({
      where: { id: marriageTeor.id },
    });

    if (!existing) {
      throw new NotFoundException(
        `Marriage Teor with id ${marriageTeor.id} not found`,
      );
    }

    const deleteMarriageTeor = this.prisma.marriage_teor.update({
      where: { id: marriageTeor.id },
      data: { deletedAt: marriageTeor.deletedAt },
    });

    if (!deleteMarriageTeor)
      throw new BadRequestException('Unable to update Marriage Teor.');
    return deleteMarriageTeor;
  }
}
