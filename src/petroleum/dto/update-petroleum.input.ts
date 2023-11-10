import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreatePetroleumInput } from './create-petroleum.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Agree, ClassType, NocType, OutletType, Status } from '@prisma/client';

@InputType()
export class UpdatePetroleumInput extends PartialType(CreatePetroleumInput) {
  @IsNotEmpty()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  userId: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  user_uid: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  address: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  mobile: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  email: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  company_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  company_region: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  designation: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  location_address: string;

  @IsOptional()
  @Field(() => NocType, { nullable: true })
  noc_type: NocType;

  @IsOptional()
  @Field(() => ClassType, { nullable: true })
  class_type: ClassType;

  @IsOptional()
  @Field(() => OutletType, { nullable: true })
  outlet_type: OutletType;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  capacity: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  survey_no: string;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  village_id: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  sub_division: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  noc_fire_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  na_order_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  sanad_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  coastguard_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  plan_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  explosive_url: string;

  @IsOptional()
  @Field(() => Agree, { nullable: true })
  iagree: Agree;

  @IsOptional()
  @Field(() => String, { nullable: true })
  remarks: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  signature_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  rejection_reason: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  certificate_id: string;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  certificate_date: Date;

  @IsOptional()
  @Field(() => String, { nullable: true })
  certificate_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  comments_dept: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  condition_to_follow: string;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
