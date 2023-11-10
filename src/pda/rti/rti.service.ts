import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRtiInput } from './dto/create-rti.input';
import { UpdateRtiInput } from './dto/update-rti.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class RtiService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllRti() {
    const rti = await this.prisma.rti_form.findMany({
      where: { deletedAt: null },
    });
    if (rti.length == 0) throw new BadRequestException('There is no rti.');
    return rti;
  }

  async getAllRtiById(id: number) {
    const rti = await this.prisma.rti_form.findFirst({
      where: { id, deletedAt: null },
    });
    if (!rti) throw new BadRequestException('No rti exist with this id.');
    return rti;
  }

  async createRti(rti: CreateRtiInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(rti)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }


    const Rti = await this.prisma.rti_form.create({
      data: dataToCreate,
    });


    if (!Rti) throw new BadRequestException('Unable to create rti');
    return Rti;
  }

  async updateRtiById(rti: UpdateRtiInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(rti)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.rti_form.findUnique({
      where: { id: rti.id },
    });

    if (!existingUser) {
      throw new NotFoundException(`RTI with id ${rti.id} not found`);
    }

    const updatedrti = this.prisma.rti_form.update({
      where: { id: rti.id },
      data: dataToUpdate,
    });
    if (!updatedrti) throw new BadRequestException('Unable to update rti.');
    return updatedrti;
  }

  async deleteRtiById(rti: UpdateRtiInput) {
    const existing = await this.prisma.rti_form.findUnique({
      where: { id: rti.id },
    });

    if (!existing) {
      throw new NotFoundException(`Rti with id ${rti.id} not found`);
    }

    const deleteRti = this.prisma.rti_form.update({
      where: { id: rti.id },
      data: { deletedAt: rti.deletedAt },
    });

    if (!deleteRti) throw new BadRequestException('Unable to update rti.');
    return deleteRti;
  }
}
