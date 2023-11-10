import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBirthCertificateInput } from './dto/create-birth_certificate.input';
import { UpdateBirthCertificateInput } from './dto/update-birth_certificate.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class BirthCertificateService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllBirthCertificate() {
    const birthCertificate =
      await this.prisma.birth_certificate.findMany({
        where: { deletedAt: null },
      });
    if (birthCertificate.length == 0)
      throw new BadRequestException('There is no Birth Certificate.');
    return birthCertificate;
  }

  async getBirthCertificateById(id: number) {
    const birthCertificate =
      await this.prisma.birth_certificate.findFirst({
        where: { id, deletedAt: null },
      });
    if (!birthCertificate)
      throw new BadRequestException(
        'No Birth Certificate exist with this id.',
      );
    return birthCertificate;
  }

  async createBirthCertificate(
    birthCertificate: CreateBirthCertificateInput,
  ) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(birthCertificate)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const BirthCertificate =
      await this.prisma.birth_certificate.create({
        data: dataToCreate,
      });

    if (!BirthCertificate)
      throw new BadRequestException(
        'Unable to create Birth Certificate',
      );
    return BirthCertificate;
  }

  async updateBirthCertificateById(
    birthCertificate: UpdateBirthCertificateInput,
  ) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(birthCertificate)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.birth_certificate.findUnique({
      where: { id: birthCertificate.id },
    });

    if (!existingUser) {
      throw new NotFoundException(
        `Birth Certificate with id ${birthCertificate.id} not found`,
      );
    }

    const updatedbirthCertificate =
      this.prisma.birth_certificate.update({
        where: { id: birthCertificate.id },
        data: dataToUpdate,
      });
    if (!updatedbirthCertificate)
      throw new BadRequestException(
        'Unable to update Birth Certificate.',
      );
    return updatedbirthCertificate;
  }

  async deleteBirthCertificateById(
    birthCertificate: UpdateBirthCertificateInput,
  ) {
    const existing = await this.prisma.birth_certificate.findUnique({
      where: { id: birthCertificate.id },
    });

    if (!existing) {
      throw new NotFoundException(
        `Birth Certificate with id ${birthCertificate.id} not found`,
      );
    }

    const deleteBirthCertificate =
      this.prisma.birth_certificate.update({
        where: { id: birthCertificate.id },
        data: { deletedAt: birthCertificate.deletedAt },
      });

    if (!deleteBirthCertificate)
      throw new BadRequestException(
        'Unable to update Birth Certificate.',
      );
    return deleteBirthCertificate;
  }
}
