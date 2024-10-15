import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMarriageCertificateInput } from './dto/create-marriage_certificate.input';
import { UpdateMarriageCertificateInput } from './dto/update-marriage_certificate.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class MarriageCertificateService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllMarriageCertificate() {
    const marriageCertificate = await this.prisma.marriage_certificate.findMany(
      {
        where: { deletedAt: null },
        orderBy: {
          updatedAt: 'desc',
        },
      },
    );
    if (marriageCertificate.length == 0)
      throw new BadRequestException('There is no Marriage Certificate.');
    return marriageCertificate;
  }

  async getMarriageCertificateById(id: number) {
    const marriageCertificate =
      await this.prisma.marriage_certificate.findFirst({
        where: { id, deletedAt: null },
      });
    if (!marriageCertificate)
      throw new BadRequestException(
        'No Marriage Certificate exist with this id.',
      );
    return marriageCertificate;
  }

  async createMarriageCertificate(
    marriageCertificate: CreateMarriageCertificateInput,
  ) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(marriageCertificate)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const MarriageCertificate = await this.prisma.marriage_certificate.create({
      data: dataToCreate,
    });

    if (!MarriageCertificate)
      throw new BadRequestException('Unable to create Marriage Certificate');
    return MarriageCertificate;
  }

  async updateMarriageCertificateById(
    marriageCertificate: UpdateMarriageCertificateInput,
  ) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(marriageCertificate)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.marriage_certificate.findUnique({
      where: { id: marriageCertificate.id },
    });

    if (!existingUser) {
      throw new NotFoundException(
        `Marriage Certificate with id ${marriageCertificate.id} not found`,
      );
    }

    const updatedmarriageCertificate = this.prisma.marriage_certificate.update({
      where: { id: marriageCertificate.id },
      data: dataToUpdate,
    });
    if (!updatedmarriageCertificate)
      throw new BadRequestException('Unable to update Marriage Certificate.');
    return updatedmarriageCertificate;
  }

  async deleteMarriageCertificateById(
    marriageCertificate: UpdateMarriageCertificateInput,
  ) {
    const existing = await this.prisma.marriage_certificate.findUnique({
      where: { id: marriageCertificate.id },
    });

    if (!existing) {
      throw new NotFoundException(
        `Marriage Certificate with id ${marriageCertificate.id} not found`,
      );
    }

    const deleteMarriageCertificate = this.prisma.marriage_certificate.update({
      where: { id: marriageCertificate.id },
      data: { deletedAt: marriageCertificate.deletedAt },
    });

    if (!deleteMarriageCertificate)
      throw new BadRequestException('Unable to update Marriage Certificate.');
    return deleteMarriageCertificate;
  }
}
