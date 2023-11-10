import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreatePlinthInput } from './create-plinth.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Agree, Status } from '@prisma/client';

@InputType()
export class UpdatePlinthInput extends PartialType(CreatePlinthInput) {
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
  @Field(() => String, { nullable: true })
  architect_address: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  applicant_uid: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  annexure_eleven: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  copy_construcation_license: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  building_plan: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  architect_signature: string;

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
