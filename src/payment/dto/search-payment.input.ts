import { IsOptional } from 'class-validator';
import { CreatePaymentInput } from './create-payment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { FormType, PaymentStatus } from '@prisma/client';

@InputType()
export class SearchPaymentInput extends PartialType(CreatePaymentInput) {
  @IsOptional()
  @Field(() => Int, { nullable: true })
  id: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  form_id: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  deptuser_id: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  user_id: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  type1: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  amount1: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  type2: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  amount2: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  type3: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  amount3: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  daycount: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  paymentamout: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  bankreference: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  orderid: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  transactionid: string;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  reconcilation: Date;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  centraldeposit: Date;

  @IsOptional()
  @Field(() => String, { nullable: true })
  depositrefnumber: string;

  @IsOptional()
  @Field(() => FormType, { nullable: true })
  form_type: FormType;

  @IsOptional()
  @Field(() => String, { nullable: true })
  paymentType: string;

  @IsOptional()
  @Field(() => PaymentStatus, { nullable: true })
  paymentstatus: PaymentStatus;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  createdAt: Date;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  updatedAt: Date;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
