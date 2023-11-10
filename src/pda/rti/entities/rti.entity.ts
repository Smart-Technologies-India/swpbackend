import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Agree, Status } from '@prisma/client';

@ObjectType()
export class Rti {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field(() => String, { nullable: true })
  user_uid: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String, { nullable: true })
  address: string;

  @Field(() => Float, { nullable: true })
  mobile: number;

  @Field(() => String, { nullable: true })
  subject_info: string;

  @Field(() => Date, { nullable: true })
  from_date: Date;

  @Field(() => Date, { nullable: true })
  to_date: Date;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => String, { nullable: true })
  information: string;

  @Field(() => String, { nullable: true })
  proverty_line_url: string;

  @Field(() => Agree)
  iagree: Agree;

  @Field(() => String, { nullable: true })
  remarks: string;

  @Field(() => String, { nullable: true })
  signature_url: string;

  @Field(() => String, { nullable: true })
  attachments: string;

  @Field(() => String, { nullable: true })
  rejection_reason: string;

  @Field(() => Status, { nullable: true })
  certificate_id: string;

  @Field(() => Date, { nullable: true })
  certificate_date: Date;

  @Field(() => String, { nullable: true })
  certificate_url: string;

  @Field(() => String, { nullable: true })
  comments_dept: string;

  @Field(() => String, { nullable: true })
  condition_to_follow: string;

  @Field(() => String, { nullable: true })
  payment_doc: string;

  @Field(() => Status)
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
