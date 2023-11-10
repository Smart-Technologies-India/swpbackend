import { InputType, Int, Field } from '@nestjs/graphql';
import { Agree, Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateMarriageTeorInput {
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
  @Field(() => Int)
  village_id: number;

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
  bride_father_name: string;

  @IsNotEmpty()
  @Field(() => String)
  bride_mother_name: string;

  @IsNotEmpty()
  @Field(() => String)
  registration_number: string;

  @IsNotEmpty()
  @Field(() => Date)
  date_of_registration: Date;

  @IsNotEmpty()
  @Field(() => String)
  applicant_uid_url: string;

  @IsNotEmpty()
  @Field(() => String)
  groom_father_uid_url: string;

  @IsNotEmpty()
  @Field(() => String)
  groom_mother_uid_url: string;

  @IsNotEmpty()
  @Field(() => String)
  bride_uid_url: string;

  @IsNotEmpty()
  @Field(() => String)
  bride_father_uid_url: string;

  @IsNotEmpty()
  @Field(() => String)
  bride_mother_uid_url: string;

  @IsNotEmpty()
  @Field(() => String)
  undertaking_url: string;

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
