import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDealinghandInput } from './dto/create-dealinghand.input';
import { UpdateDealinghandInput } from './dto/update-dealinghand.input';
import { PrismaService } from 'prisma/prisma.service';
import { SearchDealinghandInput } from './dto/search-dealinghand.input';
import { FormType } from '@prisma/client';

@Injectable()
export class DealinghandService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllDealingHand() {
    const dealingHand = await this.prisma.dealing_hand.findMany();
    if (dealingHand.length == 0)
      throw new BadRequestException('There is no Deling Hand.');
    return dealingHand;
  }

  async searchDealingHand(dealingHand: SearchDealinghandInput) {
    const dataToSearch: any = {};

    for (const [key, value] of Object.entries(dealingHand)) {
      if (value) {
        dataToSearch[key] = value;
      }
    }

    const results = await this.prisma.dealing_hand.findMany({
      where: dataToSearch,
    });

    if (results.length == 0)
      throw new BadRequestException('There is no Dealing Hand');
    return results;
  }

  async getDealingHandById(id: number) {
    const dealinghand = await this.prisma.dealing_hand.findFirst({
      where: { id },
    });
    if (!dealinghand)
      throw new BadRequestException('No dealing hand exist with this id.');
    return dealinghand;
  }

  async createDealingHand(dealinghand: CreateDealinghandInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(dealinghand)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Dealinghand = await this.prisma.dealing_hand.create({
      data: dataToCreate,
    });

    if (!Dealinghand)
      throw new BadRequestException('Unable to create Dealing Hand');
    return Dealinghand;
  }

  async updateDealingHandById(dealingHand: UpdateDealinghandInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(dealingHand)) {
      dataToUpdate[key] = value;
    }
    delete dataToUpdate['id'];

    const existing = await this.prisma.dealing_hand.findUnique({
      where: { id: dealingHand.id },
    });

    if (!existing) {
      throw new NotFoundException(
        `Dealing Hand with id ${dealingHand.id} not found`,
      );
    }


    const updatedDealingHand = this.prisma.dealing_hand.update({
      where: { id: dealingHand.id },
      data: dataToUpdate,
    });
    if (!updatedDealingHand)
      throw new BadRequestException('Unable to update Dealing Hand.');
    return updatedDealingHand;
  }

  async getuserid(filetype: string) {
    const requestone = await this.prisma.dealing_hand.findFirst({
      where: { file_type: filetype as FormType },
    });
    if (!requestone) return 5;

    const trueValues = Object.keys(requestone).filter(
      (key) => requestone[key] === true,
    );

    if (trueValues.length == 0) return 5;

    const users: { [key: string]: number } = {
      collector: 3,
      dycollector: 4,
      atp: 5,
      jtp: 6,
      je: 7,
      fieldinspector: 8,
      sitesupervisor: 9,
      architectassistant: 10,
      planningdraughtsman: 11,
      spdraughtsman: 12,
      stdraughtsman: 13,
      landsupted: 14,
      mamlatdar: 15,
      eocs: 16,
      dept1: 17,
      dept2: 18,
      dept3: 19,
      dept4: 20,
    };

    const mappedValues = trueValues.map((property) => users[property]);

    const common = await this.prisma.common.findMany({
      where: {
        form_type: filetype as FormType,
        auth_user_id: {
          in: mappedValues.map(String),
        },
      },
    });
    if (common.length == 0) return Math.max(...mappedValues);

    const countMap = new Map();

    for (const item of common) {
      const authUserId = String(item.auth_user_id);
      countMap.set(authUserId, (countMap.get(authUserId) || 0) + 1);
    }

    // Get the counts for each auth_user_id
    // const countsAccordingToAuthUserId = Array.from(
    //   countMap,
    //   ([authUserId, count]) => ({ authUserId, count }),
    // );

    const countsAccordingToAuthUserId = mappedValues.map((value) => ({
      authUserId: String(value),
      count: countMap.get(String(value)) || 0,
    }));

    countsAccordingToAuthUserId.sort((a: any, b: any) => {
      if (a.count !== b.count) {
        return a.count - b.count;
      } else {
        return b.authUserId - a.authUserId;
      }
    });

    const lowestCountUserId = countsAccordingToAuthUserId[0].authUserId;
    return parseInt(lowestCountUserId);
  }
}
