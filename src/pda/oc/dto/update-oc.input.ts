import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateOcInput } from './create-oc.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Agree, Status } from '@prisma/client';

@InputType()
export class UpdateOcInput extends PartialType(CreateOcInput) {
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
  survey_no: string;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  village_id: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  sub_division: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  permission_number: string;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  permission_date: Date;

  @IsOptional()
  @Field(() => String, { nullable: true })
  architect_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  architect_license: string;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  valid_upto: Date;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  completion_date: Date;

  @IsOptional()
  @Field(() => String, { nullable: true })
  applicant_uid: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  completion_certificate: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  construction_permission: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  building_plan: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  annexure_fourteen: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  coast_guard_noc: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  fire_noc: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  rainwater_harvest: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  deviation_plan: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  indemnity: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  valuation_certificate: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  labour_cess: string;

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
  @Field(() => String, { nullable: true })
  payment_doc: string;

  @IsOptional()
  @Field(() => Agree, { nullable: true })
  iagree: Agree;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
