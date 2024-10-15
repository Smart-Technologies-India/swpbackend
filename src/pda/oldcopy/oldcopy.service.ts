import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateOldcopyInput } from './dto/create-oldcopy.input';
import { UpdateOldcopyInput } from './dto/update-oldcopy.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class OldcopyService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllOldCopy() {
    const oldcopy = await this.prisma.old_copy_form.findMany({
      where: { deletedAt: null },
      orderBy: {
        updatedAt: 'desc',
      },
    });
    if (oldcopy.length == 0)
      throw new BadRequestException('There is no oldcopy.');
    return oldcopy;
  }

  async getOldCopyById(id: number) {
    const oldcopy = await this.prisma.old_copy_form.findFirst({
      where: { id, deletedAt: null },
    });
    if (!oldcopy)
      throw new BadRequestException('No oldcopy exist with this id.');
    return oldcopy;
  }

  async createOldCopy(oldcopy: CreateOldcopyInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(oldcopy)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Oldcopy = await this.prisma.old_copy_form.create({
      data: dataToCreate,
    });

    if (!Oldcopy) throw new BadRequestException('Unable to create oldcopy');
    return Oldcopy;
  }

  async updateOldCopyById(oldcopy: UpdateOldcopyInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(oldcopy)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.old_copy_form.findUnique({
      where: { id: oldcopy.id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Old copy with id ${oldcopy.id} not found`);
    }

    const updatedoldcopy = this.prisma.old_copy_form.update({
      where: { id: oldcopy.id },
      data: dataToUpdate,
    });
    if (!updatedoldcopy)
      throw new BadRequestException('Unable to update oldcopy.');
    return updatedoldcopy;
  }

  async deleteOldCopyById(oldcopy: UpdateOldcopyInput) {
    const existing = await this.prisma.old_copy_form.findUnique({
      where: { id: oldcopy.id },
    });

    if (!existing) {
      throw new NotFoundException(`Old copy with id ${oldcopy.id} not found`);
    }

    const deleteOldcopy = this.prisma.old_copy_form.update({
      where: { id: oldcopy.id },
      data: { deletedAt: oldcopy.deletedAt },
    });

    if (!deleteOldcopy)
      throw new BadRequestException('Unable to update oldcopy.');
    return deleteOldcopy;
  }
}
