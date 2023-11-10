import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBirthTeorInput } from './dto/create-birth_teor.input';
import { UpdateBirthTeorInput } from './dto/update-birth_teor.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class BirthTeorService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllBirthTeor() {
    const birthTeor =
      await this.prisma.birth_teor.findMany({
        where: { deletedAt: null },
      });
    if (birthTeor.length == 0)
      throw new BadRequestException('There is no Birth Teor.');
    return birthTeor;
  }

  async getBirthTeorById(id: number) {
    const birthTeor =
      await this.prisma.birth_teor.findFirst({
        where: { id, deletedAt: null },
      });
    if (!birthTeor)
      throw new BadRequestException(
        'No Birth Teor exist with this id.',
      );
    return birthTeor;
  }

  async createBirthTeor(
    birthTeor: CreateBirthTeorInput,
  ) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(birthTeor)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const BirthTeor =
      await this.prisma.birth_teor.create({
        data: dataToCreate,
      });

    if (!BirthTeor)
      throw new BadRequestException(
        'Unable to create Birth Teor',
      );
    return BirthTeor;
  }

  async updateBirthTeorById(
    birthTeor: UpdateBirthTeorInput,
  ) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(birthTeor)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.birth_teor.findUnique({
      where: { id: birthTeor.id },
    });

    if (!existingUser) {
      throw new NotFoundException(
        `Birth Teor with id ${birthTeor.id} not found`,
      );
    }

    const updatedbirthTeor =
      this.prisma.birth_teor.update({
        where: { id: birthTeor.id },
        data: dataToUpdate,
      });
    if (!updatedbirthTeor)
      throw new BadRequestException(
        'Birth Teor Permanent Water Disonnect.',
      );
    return updatedbirthTeor;
  }

  async deleteBirthTeorById(
    birthTeor: UpdateBirthTeorInput,
  ) {
    const existing = await this.prisma.birth_teor.findUnique({
      where: { id: birthTeor.id },
    });

    if (!existing) {
      throw new NotFoundException(
        `Birth Teor with id ${birthTeor.id} not found`,
      );
    }

    const deleteBirthTeor =
      this.prisma.birth_teor.update({
        where: { id: birthTeor.id },
        data: { deletedAt: birthTeor.deletedAt },
      });

    if (!deleteBirthTeor)
      throw new BadRequestException(
        'Unable to update Birth Teor.',
      );
    return deleteBirthTeor;
  }
}
