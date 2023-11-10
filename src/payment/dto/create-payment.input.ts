import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

import { FormType, PaymentStatus, Status, queryStatus } from '@prisma/client';

registerEnumType(PaymentStatus, {
  name: 'PaymentStatus',
});

@InputType()
export class CreatePaymentInput {
  @IsNotEmpty()
  @Field(() => Int)
  form_id: number;

  @IsNotEmpty()
  @Field(() => Int)
  deptuser_id: number;

  @IsNotEmpty()
  @Field(() => Int)
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

  @IsNotEmpty()
  @Field(() => FormType)
  form_type: FormType;

  @IsNotEmpty()
  @Field(() => PaymentStatus)
  paymentstatus: PaymentStatus;
}
