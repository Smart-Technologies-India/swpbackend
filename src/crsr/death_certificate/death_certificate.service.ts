import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDeathCertificateInput } from './dto/create-death_certificate.input';
import { UpdateDeathCertificateInput } from './dto/update-death_certificate.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class DeathCertificateService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllDeathCertificate() {
    const deathCertificate = await this.prisma.death_certificate.findMany({
      where: { deletedAt: null },
    });
    if (deathCertificate.length == 0)
      throw new BadRequestException('There is no Death Certificate.');
    return deathCertificate;
  }

  async getDeathCertificateById(id: number) {
    const deathCertificate = await this.prisma.death_certificate.findFirst({
      where: { id, deletedAt: null },
    });
    if (!deathCertificate)
      throw new BadRequestException('No Death Certificate exist with this id.');
    return deathCertificate;
  }

  async createDeathCertificate(deathCertificate: CreateDeathCertificateInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(deathCertificate)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const DeathCertificate = await this.prisma.death_certificate.create({
      data: dataToCreate,
    });

    if (!DeathCertificate)
      throw new BadRequestException('Unable to create Death Certificate');
    return DeathCertificate;
  }

  async updateDeathCertificateById(
    deathCertificate: UpdateDeathCertificateInput,
  ) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(deathCertificate)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.death_certificate.findUnique({
      where: { id: deathCertificate.id },
    });

    if (!existingUser) {
      throw new NotFoundException(
        `Death Certificate with id ${deathCertificate.id} not found`,
      );
    }

    const updateddeathCertificate = this.prisma.death_certificate.update({
      where: { id: deathCertificate.id },
      data: dataToUpdate,
    });
    if (!updateddeathCertificate)
      throw new BadRequestException(
        'Unable to update Death Certificate.',
      );
    return updateddeathCertificate;
  }

  async deleteDeathCertificateById(
    deathCertificate: UpdateDeathCertificateInput,
  ) {
    const existing = await this.prisma.death_certificate.findUnique({
      where: { id: deathCertificate.id },
    });

    if (!existing) {
      throw new NotFoundException(
        `Death Certificate with id ${deathCertificate.id} not found`,
      );
    }

    const deleteDeathCertificate = this.prisma.death_certificate.update({
      where: { id: deathCertificate.id },
      data: { deletedAt: deathCertificate.deletedAt },
    });

    if (!deleteDeathCertificate)
      throw new BadRequestException('Unable to update Death Certificate.');
    return deleteDeathCertificate;
  }
}
