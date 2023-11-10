import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Agree, ClassType, NocType, OutletType, Status } from '@prisma/client';

@ObjectType()
export class Petroleum {
  @Field(() => Int, { nullable: true })
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
  company_name: string;

  @Field(() => String, { nullable: true })
  company_region: string;

  @Field(() => String, { nullable: true })
  designation: string;

  @Field(() => String, { nullable: true })
  location_address: string;

  @Field(() => NocType, { nullable: true })
  noc_type: NocType;

  @Field(() => ClassType, { nullable: true })
  class_type: ClassType;

  @Field(() => OutletType, { nullable: true })
  outlet_type: OutletType;

  @Field(() => Int, { nullable: true })
  capacity: number;

  @Field(() => String, { nullable: true })
  survey_no: string;

  @Field(() => Int, { nullable: true })
  village_id: number;

  @Field(() => String, { nullable: true })
  sub_division: string;

  @Field(() => String, { nullable: true })
  noc_fire_url: string;

  @Field(() => String, { nullable: true })
  na_order_url: string;

  @Field(() => String, { nullable: true })
  sanad_url: string;

  @Field(() => String, { nullable: true })
  coastguard_url: string;

  @Field(() => String, { nullable: true })
  plan_url: string;

  @Field(() => String, { nullable: true })
  explosive_url: string;

  @Field(() => Agree, { nullable: true })
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

  @Field(() => Status, { nullable: true })
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
