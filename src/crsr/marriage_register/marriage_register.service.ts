import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMarriageRegisterInput } from './dto/create-marriage_register.input';
import { UpdateMarriageRegisterInput } from './dto/update-marriage_register.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class MarriageRegisterService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllMarriageRegister() {
    const marriageRegister =
      await this.prisma.marriage_register.findMany({
        where: { deletedAt: null },
      });
    if (marriageRegister.length == 0)
      throw new BadRequestException('There is no Marriage Register.');
    return marriageRegister;
  }

  async getMarriageRegisterById(id: number) {
    const marriageRegister =
      await this.prisma.marriage_register.findFirst({
        where: { id, deletedAt: null },
      });
    if (!marriageRegister)
      throw new BadRequestException(
        'No Marriage Register exist with this id.',
      );
    return marriageRegister;
  }

  async createMarriageRegister(
    marriageRegister: CreateMarriageRegisterInput,
  ) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(marriageRegister)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const MarriageRegister =
      await this.prisma.marriage_register.create({
        data: dataToCreate,
      });

    if (!MarriageRegister)
      throw new BadRequestException(
        'Unable to create Marriage Register',
      );
    return MarriageRegister;
  }

  async updateMarriageRegisterById(
    marriageRegister: UpdateMarriageRegisterInput,
  ) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(marriageRegister)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.marriage_register.findUnique({
      where: { id: marriageRegister.id },
    });

    if (!existingUser) {
      throw new NotFoundException(
        `Marriage Register with id ${marriageRegister.id} not found`,
      );
    }

    const updatedmarriageRegister =
      this.prisma.marriage_register.update({
        where: { id: marriageRegister.id },
        data: dataToUpdate,
      });
    if (!updatedmarriageRegister)
      throw new BadRequestException(
        'Unable to update Marriage Register.',
      );
    return updatedmarriageRegister;
  }

  async deleteMarriageRegisterById(
    marriageRegister: UpdateMarriageRegisterInput,
  ) {
    const existing = await this.prisma.marriage_register.findUnique({
      where: { id: marriageRegister.id },
    });

    if (!existing) {
      throw new NotFoundException(
        `Marriage Register with id ${marriageRegister.id} not found`,
      );
    }

    const deleteMarriageRegister =
      this.prisma.marriage_register.update({
        where: { id: marriageRegister.id },
        data: { deletedAt: marriageRegister.deletedAt },
      });

    if (!deleteMarriageRegister)
      throw new BadRequestException(
        'Unable to update Marriage Register.',
      );
    return deleteMarriageRegister;
  }
}
