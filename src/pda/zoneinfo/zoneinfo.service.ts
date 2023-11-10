import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateZoneinfoInput } from './dto/create-zoneinfo.input';
import { UpdateZoneinfoInput } from './dto/update-zoneinfo.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ZoneinfoService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllZone() {
    const zone = await this.prisma.zone_info_form.findMany({
      where: { deletedAt: null },
    });
    if (zone.length == 0) throw new BadRequestException('There is no zone.');
    return zone;
  }

  async getAllZoneById(id: number) {
    const zone = await this.prisma.zone_info_form.findFirst({
      where: { id, deletedAt: null },
    });
    if (!zone) throw new BadRequestException('No zone exist with this id.');
    return zone;
  }

  async createZone(zone: CreateZoneinfoInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(zone)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Zone = await this.prisma.zone_info_form.create({
      data: dataToCreate,
    });

    if (!Zone) throw new BadRequestException('Unable to create zone');
    return Zone;
  }

  async updateZoneById(zone: UpdateZoneinfoInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(zone)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.zone_info_form.findUnique({
      where: { id: zone.id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Zone with id ${zone.id} not found`);
    }

    const updatedZone = this.prisma.zone_info_form.update({
      where: { id: zone.id },
      data: dataToUpdate,
    });
    if (!updatedZone) throw new BadRequestException('Unable to update zone.');
    return updatedZone;
  }

  async deleteZoneById(zone: UpdateZoneinfoInput) {
    const existing = await this.prisma.zone_info_form.findUnique({
      where: { id: zone.id },
    });

    if (!existing) {
      throw new NotFoundException(`Zone with id ${zone.id} not found`);
    }

    const deleteZone = this.prisma.zone_info_form.update({
      where: { id: zone.id },
      data: { deletedAt: zone.deletedAt },
    });

    if (!deleteZone) throw new BadRequestException('Unable to update zone.');
    return deleteZone;
  }
}
