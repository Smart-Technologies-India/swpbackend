import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateCpInput } from './create-cp.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Agree, Status } from '@prisma/client';

@InputType()
export class UpdateCpInput extends PartialType(CreateCpInput) {
  @IsNotEmpty()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  userId: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  user_uid: string;

  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  name: string;

  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  address: string;

  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  mobile: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  email: string;

  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  survey_no: string;

  @IsNotEmpty()
  @Field(() => Int, { nullable: true })
  village_id: number;

  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  sub_division: string;

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
  @Field(() => String, { nullable: true })
  applicant_uid: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  annexure_two: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  annexure_three: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  annexure_four: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  annexure_five: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  na_copoy: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  map_copy: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  nakal_1_14: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  building_plan: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  scrutiny_fees: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  coast_guard_noc: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  fire_noc: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  crz_noc: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  layout_plan: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  revised_plan: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  fsi: string;

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
