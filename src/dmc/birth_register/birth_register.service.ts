import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBirthRegisterInput } from './dto/create-birth_register.input';
import { UpdateBirthRegisterInput } from './dto/update-birth_register.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class BirthRegisterService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllBirthRegister() {
    const birthregister = await this.prisma.birth_register.findMany({
      where: { deletedAt: null },
      orderBy: {
        updatedAt: 'desc',
      },
    });
    if (birthregister.length == 0)
      throw new BadRequestException('There is no birthregister.');
    return birthregister;
  }

  async getBirthRegisterById(id: number) {
    const birthregister = await this.prisma.birth_register.findFirst({
      where: { id, deletedAt: null },
    });
    if (!birthregister)
      throw new BadRequestException('No birthregister exist with this id.');
    return birthregister;
  }

  async createBirthRegister(birthregister: CreateBirthRegisterInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(birthregister)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const BirthRegister = await this.prisma.birth_register.create({
      data: dataToCreate,
    });

    if (!BirthRegister)
      throw new BadRequestException('Unable to create birthregister');
    return BirthRegister;
  }

  async updateBirthRegisterById(birthregister: UpdateBirthRegisterInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(birthregister)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.birth_register.findUnique({
      where: { id: birthregister.id },
    });

    if (!existingUser) {
      throw new NotFoundException(
        `Birth Register with id ${birthregister.id} not found`,
      );
    }

    const updatedbirthregister = this.prisma.birth_register.update({
      where: { id: birthregister.id },
      data: dataToUpdate,
    });
    if (!updatedbirthregister)
      throw new BadRequestException('Unable to update birthregister.');
    return updatedbirthregister;
  }

  async deleteBirthRegisterById(birthregister: UpdateBirthRegisterInput) {
    const existing = await this.prisma.birth_register.findUnique({
      where: { id: birthregister.id },
    });

    if (!existing) {
      throw new NotFoundException(
        `Birth Register with id ${birthregister.id} not found`,
      );
    }

    const deleteBirthRegister = this.prisma.birth_register.update({
      where: { id: birthregister.id },
      data: { deletedAt: birthregister.deletedAt },
    });

    if (!deleteBirthRegister)
      throw new BadRequestException('Unable to update birthregister.');
    return deleteBirthRegister;
  }
}
