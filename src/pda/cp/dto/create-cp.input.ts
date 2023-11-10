import { InputType, Int, Field } from '@nestjs/graphql';
import { Agree, Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateCpInput {
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
  signature_url: string;

  @IsOptional()
  @Field(() => Agree, { nullable: true })
  iagree: Agree;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;
}
