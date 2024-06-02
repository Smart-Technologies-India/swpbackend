import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FormType, PaymentStatus } from '@prisma/client';

@ObjectType()
export class Payment {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  form_id: number;

  @Field(() => Int)
  deptuser_id: number;

  @Field(() => Int)
  user_id: number;

  @Field(() => Int, { nullable: true })
  type1: number;

  @Field(() => Int, { nullable: true })
  amount1: number;

  @Field(() => Int, { nullable: true })
  type2: number;

  @Field(() => Int, { nullable: true })
  amount2: number;

  @Field(() => Int, { nullable: true })
  type3: number;

  @Field(() => Int, { nullable: true })
  amount3: number;

  @Field(() => Int, { nullable: true })
  daycount: number;

  @Field(() => Int, { nullable: true })
  paymentamout: number;

  @Field(() => String, { nullable: true })
  bankreference: string;

  @Field(() => String, { nullable: true })
  orderid: string;

  @Field(() => String, { nullable: true })
  transactionid: string;

  @Field(() => Date, { nullable: true })
  reconcilation: Date;

  @Field(() => Date, { nullable: true })
  centraldeposit: Date;

  @Field(() => String, { nullable: true })
  depositrefnumber: string;

  @Field(() => FormType)
  form_type: FormType;

  @Field(() => String)
  paymentType: string;

  @Field(() => PaymentStatus)
  paymentstatus: PaymentStatus;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
