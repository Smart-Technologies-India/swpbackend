import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateNewrationcardmemberInput } from './dto/create-newrationcardmember.input';
import { UpdateNewrationcardmemberInput } from './dto/update-newrationcardmember.input';
import { PrismaService } from 'prisma/prisma.service';
import { CreateMultipalNewrationcardmemberInput } from './dto/create-multipal-newrationcardmember.input';

@Injectable()
export class NewrationcardmembersService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllNewRationMember() {
    const rationcardmembers = await this.prisma.members.findMany({
      where: { deletedAt: null },
      orderBy: {
        updatedAt: 'desc',
      },
    });
    if (rationcardmembers.length == 0)
      throw new BadRequestException('There is no ration card members.');
    return rationcardmembers;
  }

  async getRattionMemberById(id: number) {
    const reationcard_members = await this.prisma.members.findFirst({
      where: { id, deletedAt: null },
    });
    if (!reationcard_members)
      throw new BadRequestException(
        'No ration card member exist with this id.',
      );
    return reationcard_members;
  }

  async createRationMember(ration_card_member: CreateNewrationcardmemberInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(ration_card_member)) {
      if (value || key == 'option_to_life_commodity') {
        dataToCreate[key] = value;
      }
    }

    const member = await this.prisma.members.create({
      data: dataToCreate,
    });

    if (!member) throw new BadRequestException('Unable to create member');
    return member;
  }

  async createMultipalRationMember(
    ration_card_members: CreateMultipalNewrationcardmemberInput,
  ) {
    const members = ration_card_members.members; // assuming members is an array

    if (!Array.isArray(members) || members.length === 0) {
      throw new BadRequestException('No members provided');
    }

    const createdMembers = [];

    // Loop through each member and create them using createRationMember
    for (const member of members) {
      const createdMember = await this.createRationMember(member);
      createdMembers.push(createdMember);
    }

    return createdMembers;
  }

  async updateRationMemberById(
    ration_card_members: UpdateNewrationcardmemberInput,
  ) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(ration_card_members)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.members.findUnique({
      where: { id: ration_card_members.id },
    });

    if (!existingUser) {
      throw new NotFoundException(
        `Ration Card Member with id ${ration_card_members.id} not found`,
      );
    }

    const updatedMember = this.prisma.marriage_form.update({
      where: { id: ration_card_members.id },
      data: dataToUpdate,
    });
    if (!updatedMember)
      throw new BadRequestException('Unable to update Members.');
    return updatedMember;
  }

  async deleteRationNumberById(
    ration_card_memeber: UpdateNewrationcardmemberInput,
  ) {
    const existing = await this.prisma.members.findUnique({
      where: { id: ration_card_memeber.id },
    });

    if (!existing) {
      throw new NotFoundException(
        `Ration Card Member with id ${ration_card_memeber.id} not found`,
      );
    }

    const deleteMember = this.prisma.members.update({
      where: { id: ration_card_memeber.id },
      data: { deletedAt: ration_card_memeber.deletedAt },
    });

    if (!deleteMember)
      throw new BadRequestException('Unable to delete ration Card member.');
    return deleteMember;
  }
}
