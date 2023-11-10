import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Agree, Status } from '@prisma/client';

@ObjectType()
export class Oc {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  userId: number;

  @Field(() => String, { nullable: true })
  user_uid: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  address: string;

  @Field(() => String)
  mobile: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String)
  survey_no: string;

  @Field(() => Int)
  village_id: number;

  @Field(() => String)
  sub_division: string;

  @Field(() => String, { nullable: true })
  permission_number: string;

  @Field(() => Date, { nullable: true })
  permission_date: Date;

  @Field(() => String, { nullable: true })
  architect_name: string;

  @Field(() => String, { nullable: true })
  architect_license: string;

  @Field(() => Date, { nullable: true })
  valid_upto: Date;

  @Field(() => Date, { nullable: true })
  completion_date: Date;

  @Field(() => String, { nullable: true })
  applicant_uid: string;

  @Field(() => String, { nullable: true })
  completion_certificate: string;

  @Field(() => String, { nullable: true })
  construction_permission: string;

  @Field(() => String, { nullable: true })
  building_plan: string;

  @Field(() => String, { nullable: true })
  annexure_fourteen: string;

  @Field(() => String, { nullable: true })
  coast_guard_noc: string;

  @Field(() => String, { nullable: true })
  fire_noc: string;

  @Field(() => String, { nullable: true })
  rainwater_harvest: string;

  @Field(() => String, { nullable: true })
  deviation_plan: string;

  @Field(() => String, { nullable: true })
  indemnity: string;

  @Field(() => String, { nullable: true })
  valuation_certificate: string;

  @Field(() => String, { nullable: true })
  labour_cess: string;

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
