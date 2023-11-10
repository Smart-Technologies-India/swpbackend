import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePaymentInput } from './dto/create-payment.input';
import { UpdatePaymentInput } from './dto/update-payment.input';
import { PrismaService } from 'prisma/prisma.service';
import { SearchPaymentInput } from './dto/search-payment.input';

@Injectable()
export class PaymentService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllPayment() {
    const payment = await this.prisma.payment.findMany({
      where: { deletedAt: null },
    });
    if (payment.length == 0)
      throw new BadRequestException('There is no payment.');
    return payment;
  }

  async searchPayment(payment: SearchPaymentInput) {
    const results = await this.prisma.payment.findMany({
      where: payment,
      include: {
        user: true,
      },
    });

    if (results.length == 0)
      throw new BadRequestException('There is no payment');
    return results;
  }

  async getAllPaymentById(id: number) {
    const payment = await this.prisma.payment.findFirst({
      where: { id, deletedAt: null },
    });
    if (!payment)
      throw new BadRequestException('No payment exist with this id.');
    return payment;
  }

  async createPayment(payment: CreatePaymentInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(payment)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Payment = await this.prisma.payment.create({
      data: dataToCreate,
    });

    if (!Payment) throw new BadRequestException('Unable to create payment');
    return Payment;
  }

  async updatePaymentById(payment: UpdatePaymentInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(payment)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.payment.findUnique({
      where: { id: payment.id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Payment with id ${payment.id} not found`);
    }

    delete dataToUpdate.id;

    const updatedPayment = this.prisma.payment.update({
      where: { id: payment.id },
      data: dataToUpdate,
    });
    if (!updatedPayment)
      throw new BadRequestException('Unable to update payment.');
    return updatedPayment;
  }

  async deletePaymentById(payment: UpdatePaymentInput) {
    const existing = await this.prisma.payment.findUnique({
      where: { id: payment.id },
    });

    if (!existing) {
      throw new NotFoundException(`Payment with id ${payment.id} not found`);
    }

    const deletePayment = this.prisma.payment.update({
      where: { id: payment.id },
      data: { deletedAt: payment.deletedAt },
    });

    if (!deletePayment)
      throw new BadRequestException('Unable to update payment.');
    return deletePayment;
  }

}
