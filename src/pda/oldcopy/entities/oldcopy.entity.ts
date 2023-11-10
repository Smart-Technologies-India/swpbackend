import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Agree, Status, TypeOfInfo } from '@prisma/client';

@ObjectType()
export class Oldcopy {
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

  @Field(() => String, { nullable: true })
  mobile: string;

  @Field(() => Int, { nullable: true })
  village_id: number;

  @Field(() => String, { nullable: true })
  survey_no: string;

  @Field(() => String, { nullable: true })
  sub_division: string;

  @Field(() => Date, { nullable: true })
  prev_application_date: Date;

  @Field(() => String, { nullable: true })
  prev_application_number: string;

  @Field(() => TypeOfInfo)
  type_of_information: TypeOfInfo;

  @Field(() => String, { nullable: true })
  information_needed: string;

  @Field(() => String, { nullable: true })
  aadhar_url: string;

  @Field(() => Agree)
  iagree: Agree;

  @Field(() => String, { nullable: true })
  remarks: string;

  @Field(() => String, { nullable: true })
  signature_url: string;

  @Field(() => String, { nullable: true })
  rejection_reason: string;

  @Field(() => String, { nullable: true })
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
