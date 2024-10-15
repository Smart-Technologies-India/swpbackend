import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PaymentService } from './payment.service';
import { Payment } from './entities/payment.entity';
import { CreatePaymentInput } from './dto/create-payment.input';
import { UpdatePaymentInput } from './dto/update-payment.input';
import { SearchPaymentInput } from './dto/search-payment.input';

@Resolver(() => Payment)
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {}

  @Query(() => [Payment])
  getAllPayment() {
    return this.paymentService.getAllPayment();
  }

  @Query(() => [Payment])
  getAllPaidPayment(
    @Args('department', { type: () => String }) department: string,
  ) {
    return this.paymentService.getAllPaidPayment(department);
  }

  @Query(() => Payment)
  getAllPaymentById(@Args('id', { type: () => Int }) id: number) {
    return this.paymentService.getAllPaymentById(id);
  }

  @Query(() => Payment)
  getPaymentReceipt(
    @Args('id', { type: () => Int }) id: number,
    @Args('type', { type: () => String }) type: string,
  ) {
    return this.paymentService.getPaymentReceipt(id, type);
  }

  @Query(() => [Payment])
  searchPayment(
    @Args('searchPaymentInput') searchPaymentInput: SearchPaymentInput,
  ) {
    return this.paymentService.searchPayment(searchPaymentInput);
  }

  @Mutation(() => Payment)
  createPayment(
    @Args('createPaymentInput') createPaymentInput: CreatePaymentInput,
  ) {
    return this.paymentService.createPayment(createPaymentInput);
  }

  @Mutation(() => Payment)
  updatePaymentById(
    @Args('updatePaymentInput') updatePaymentInput: UpdatePaymentInput,
  ) {
    return this.paymentService.updatePaymentById(updatePaymentInput);
  }

  @Mutation(() => Payment)
  deletePaymentById(
    @Args('updatePaymentInput') updatePaymentInput: UpdatePaymentInput,
  ) {
    return this.paymentService.deletePaymentById(updatePaymentInput);
  }
}
