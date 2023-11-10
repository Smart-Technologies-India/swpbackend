import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateDeathRegiserInput } from './create-death_regiser.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import {
  Agree,
  AttendentType,
  BirthPlace,
  DeliveryMethod,
  Gender,
  Religion,
  Status,
} from '@prisma/client';

@InputType()
export class UpdateDeathRegiserInput extends PartialType(
  CreateDeathRegiserInput,
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
  @Field(() => Date, { nullable: true })
  date_of_birth: Date;

  @IsOptional()
  @Field(() => Gender, { nullable: true })
  gender: Gender;

  @IsOptional()
  @Field(() => String, { nullable: true })
  name_of_deceased: string;

  @IsNotEmpty()
  @Field(() => Date)
  date_of_death: Date;

  @IsOptional()
  @Field(() => String, { nullable: true })
  father_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  mother_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  wife_name: string;

  @IsOptional()
  @Field(() => BirthPlace, { nullable: true })
  death_place: BirthPlace;

  @IsOptional()
  @Field(() => String, { nullable: true })
  death_place_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  current_address: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  permanent_address: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  death_place_address: string;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  death_certified: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  name_of_disease: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  pregnancy_death: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  smoker_death: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  alcoholic_death: boolean;

  @IsOptional()
  @Field(() => Religion, { nullable: true })
  religion_deceased: Religion;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  date_of_marriage: Date;

  @IsOptional()
  @Field(() => AttendentType, { nullable: true })
  attender_type: AttendentType;

  @IsOptional()
  @Field(() => String, { nullable: true })
  deceased_uid_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  father_uid_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  authority_letter_url: string;

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
