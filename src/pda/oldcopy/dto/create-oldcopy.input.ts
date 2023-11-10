import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { Agree, Status, TypeOfInfo } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

registerEnumType(TypeOfInfo, {
  name: 'TypeOfInfo',
});

@InputType()
export class CreateOldcopyInput {
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
  @Field(() => Date, { nullable: true })
  prev_application_date: Date;

  @IsOptional()
  @Field(() => String, { nullable: true })
  prev_application_number: string;

  @IsOptional()
  @Field(() => TypeOfInfo, { nullable: true })
  type_of_information: TypeOfInfo;

  @IsOptional()
  @Field(() => String, { nullable: true })
  information_needed: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  aadhar_url: string;

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
