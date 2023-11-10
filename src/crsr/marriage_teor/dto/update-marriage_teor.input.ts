import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateMarriageTeorInput } from './create-marriage_teor.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Agree, Status } from '@prisma/client';

@InputType()
export class UpdateMarriageTeorInput extends PartialType(
  CreateMarriageTeorInput,
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
  @Field(() => Int, { nullable: true })
  village_id: number;

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
  bride_father_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  bride_mother_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  registration_number: string;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  date_of_registration: Date;

  @IsOptional()
  @Field(() => String, { nullable: true })
  applicant_uid_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  groom_father_uid_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  groom_mother_uid_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  bride_uid_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  bride_father_uid_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  bride_mother_uid_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  undertaking_url: string;

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
