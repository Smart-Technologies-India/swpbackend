import { InputType, Int, Field } from '@nestjs/graphql';
import { Agree, Religion, Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateMarriageRegisterInput {
  @IsOptional()
  @Field(() => Int, { nullable: true })
  userId: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  user_uid: string;

  @IsNotEmpty()
  @Field(() => String)
  mobile: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  email: string;

  @IsNotEmpty()
  @Field(() => Int)
  village_id: number;

  @IsNotEmpty()
  @Field(() => String)
  groom_name: string;

  @IsNotEmpty()
  @Field(() => String)
  groom_address: string;

  @IsNotEmpty()
  @Field(() => Date)
  groom_date_of_birth: Date;

  @IsNotEmpty()
  @Field(() => Religion)
  religion_groom: Religion;

  @IsNotEmpty()
  @Field(() => String)
  groom_father_name: string;

  @IsNotEmpty()
  @Field(() => String)
  groom_mother_name: string;

  @IsNotEmpty()
  @Field(() => String)
  bride_name: string;

  @IsNotEmpty()
  @Field(() => String)
  bride_address: string;

  @IsNotEmpty()
  @Field(() => Date)
  bride_date_of_birth: Date;

  @IsNotEmpty()
  @Field(() => Religion)
  religion_bride: Religion;

  @IsNotEmpty()
  @Field(() => String)
  bride_father_name: string;

  @IsNotEmpty()
  @Field(() => String)
  bride_mother_name: string;

  @IsNotEmpty()
  @Field(() => Date)
  date_of_marriage: Date;

  @IsNotEmpty()
  @Field(() => String)
  witness_one_details: string;

  @IsNotEmpty()
  @Field(() => String)
  witness_two_details: string;

  @IsNotEmpty()
  @Field(() => String)
  witness_three_details: string;

  @IsNotEmpty()
  @Field(() => String)
  joint_bride_groom_photo_url: string;

  @IsNotEmpty()
  @Field(() => String)
  applicant_uid_url: string;

  @IsNotEmpty()
  @Field(() => String)
  bride_uid_url: string;

  @IsNotEmpty()
  @Field(() => String)
  groom_uid_url: string;

  @IsNotEmpty()
  @Field(() => String)
  witness_one_signature_url: string;

  @IsNotEmpty()
  @Field(() => String)
  witness_two_signature_url: string;

  @IsNotEmpty()
  @Field(() => String)
  witness_three_signature_url: string;

  @IsNotEmpty()
  @Field(() => String)
  undertaking_url: string;

  @IsNotEmpty()
  @Field(() => String)
  groom_signature_url: string;

  @IsNotEmpty()
  @Field(() => String)
  bride_signature_url: string;

  @IsNotEmpty()
  @Field(() => String)
  signature_url: string;

  @IsOptional()
  @Field(() => Agree, { nullable: true })
  iagree: Agree;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;
}
