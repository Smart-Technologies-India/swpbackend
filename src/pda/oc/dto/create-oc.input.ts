import { InputType, Int, Field } from '@nestjs/graphql';
import { Agree, Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateOcInput {
  @IsOptional()
  @Field(() => Int, { nullable: true })
  userId: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  user_uid: string;

  @IsNotEmpty()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @Field(() => String)
  address: string;

  @IsNotEmpty()
  @Field(() => String)
  mobile: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  email: string;

  @IsNotEmpty()
  @Field(() => String)
  survey_no: string;

  @IsNotEmpty()
  @Field(() => Int)
  village_id: number;

  @IsNotEmpty()
  @Field(() => String)
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
  signature_url: string;

  @IsOptional()
  @Field(() => Agree, { nullable: true })
  iagree: Agree;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;
}
