import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Agree, Status } from '@prisma/client';

@ObjectType()
export class Cp {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  userId: number;

  @Field(() => String, { nullable: true })
  user_uid: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  address: string;

  @Field(() => String, { nullable: true })
  mobile: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String, { nullable: true })
  survey_no: string;

  @Field(() => Int, { nullable: true })
  village_id: number;

  @Field(() => String, { nullable: true })
  sub_division: string;

  @Field(() => String, { nullable: true })
  architect_name: string;

  @Field(() => String, { nullable: true })
  architect_license: string;

  @Field(() => Date, { nullable: true })
  valid_upto: Date;

  @Field(() => String, { nullable: true })
  applicant_uid: string;

  @Field(() => String, { nullable: true })
  annexure_two: string;

  @Field(() => String, { nullable: true })
  annexure_three: string;

  @Field(() => String, { nullable: true })
  annexure_four: string;

  @Field(() => String, { nullable: true })
  annexure_five: string;

  @Field(() => String, { nullable: true })
  na_copoy: string;

  @Field(() => String, { nullable: true })
  map_copy: string;

  @Field(() => String, { nullable: true })
  nakal_1_14: string;

  @Field(() => String, { nullable: true })
  building_plan: string;

  @Field(() => String, { nullable: true })
  scrutiny_fees: string;

  @Field(() => String, { nullable: true })
  coast_guard_noc: string;

  @Field(() => String, { nullable: true })
  fire_noc: string;

  @Field(() => String, { nullable: true })
  crz_noc: string;

  @Field(() => String, { nullable: true })
  layout_plan: string;

  @Field(() => String, { nullable: true })
  revised_plan: string;

  @Field(() => String, { nullable: true })
  fsi: string;

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

  @Field(() => Agree, { nullable: true })
  iagree: Agree;

  @Field(() => Status, { nullable: true })
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
