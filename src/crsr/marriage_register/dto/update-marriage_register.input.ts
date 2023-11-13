import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateMarriageRegisterInput } from './create-marriage_register.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Agree, Religion, Status } from '@prisma/client';

@InputType()
export class UpdateMarriageRegisterInput extends PartialType(
  CreateMarriageRegisterInput,
) {
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
  mobile: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  email: string;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  village_id: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  groom_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  groom_address: string;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  groom_date_of_birth: Date;

  @IsOptional()
  @Field(() => Religion, { nullable: true })
  religion_groom: Religion;

  @IsOptional()
  @Field(() => String, { nullable: true })
  groom_father_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  groom_mother_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  bride_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  bride_address: string;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  bride_date_of_birth: Date;

  @IsOptional()
  @Field(() => Religion, { nullable: true })
  religion_bride: Religion;

  @IsOptional()
  @Field(() => String, { nullable: true })
  bride_father_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  bride_mother_name: string;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  date_of_marriage: Date;

  @IsOptional()
  @Field(() => String, { nullable: true })
  witness_one_details: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  witness_two_details: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  witness_three_details: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  joint_bride_groom_photo_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  applicant_uid_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  bride_uid_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  groom_uid_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  witness_one_signature_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  witness_two_signature_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  witness_three_signature_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  undertaking_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  groom_signature_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  bride_signature_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  signature_url: string;

  @IsOptional()
  @Field(() => Agree, { nullable: true })
  iagree: Agree;

  @IsOptional()
  @Field(() => String, { nullable: true })
  remarks: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  other_remarks: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  rejection_reason: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  condition_to_follow: string;

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
  @Field(() => Status, { nullable: true })
  status: Status;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
