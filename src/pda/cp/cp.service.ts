import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCpInput } from './dto/create-cp.input';
import { UpdateCpInput } from './dto/update-cp.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CpService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllCp() {
    const cp = await this.prisma.cp_form.findMany({
      where: { deletedAt: null },
    });
    if (cp.length == 0) throw new BadRequestException('There is no cp.');
    return cp;
  }

  async getCpById(id: number) {
    const cp = await this.prisma.cp_form.findFirst({
      where: { id, deletedAt: null },
    });
    if (!cp) throw new BadRequestException('No cp exist with this id.');
    return cp;
  }

  async createCp(cp: CreateCpInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(cp)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Cp = await this.prisma.cp_form.create({
      data: dataToCreate,
    });

    if (!Cp) throw new BadRequestException('Unable to create cp');
    return Cp;
  }

  async updateCpById(cp: UpdateCpInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(cp)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.cp_form.findUnique({
      where: { id: cp.id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Old copy with id ${cp.id} not found`);
    }

    const updatedcp = this.prisma.cp_form.update({
      where: { id: cp.id },
      data: dataToUpdate,
    });
    if (!updatedcp) throw new BadRequestException('Unable to update cp.');
    return updatedcp;
  }

  async deleteCpById(cp: UpdateCpInput) {
    const existing = await this.prisma.cp_form.findUnique({
      where: { id: cp.id },
    });

    if (!existing) {
      throw new NotFoundException(`Old copy with id ${cp.id} not found`);
    }

    const deleteCp = this.prisma.cp_form.update({
      where: { id: cp.id },
      data: { deletedAt: cp.deletedAt },
    });

    if (!deleteCp) throw new BadRequestException('Unable to update cp.');
    return deleteCp;
  }
}
