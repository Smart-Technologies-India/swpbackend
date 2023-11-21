import { InputType, Int, Field } from '@nestjs/graphql';
import { Agree, Gender, Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateDeathCertificateInput {
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
  @Field(() => Gender)
  gender: Gender;

  @IsNotEmpty()
  @Field(() => Date)
  date_of_birth: Date;

  @IsNotEmpty()
  @Field(() => Date)
  date_of_death: Date;

  @IsNotEmpty()
  @Field(() => String)
  place_of_death: string;

  @IsNotEmpty()
  @Field(() => String)
  father_name: string;

  @IsNotEmpty()
  @Field(() => String)
  mother_name: string;

  @IsNotEmpty()
  @Field(() => String)
  husband_name: string;

  @IsNotEmpty()
  @Field(() => String)
  registration_number: String;

  @IsNotEmpty()
  @Field(() => Date)
  date_of_registration: Date;

  @IsNotEmpty()
  @Field(() => String)
  applicant_uid_url: string;

  @IsNotEmpty()
  @Field(() => String)
  father_uid_url: string;

  @IsNotEmpty()
  @Field(() => String)
  mother_uid_url: string;

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
