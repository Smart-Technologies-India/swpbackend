import { InputType, Int, Field } from '@nestjs/graphql';
import {
  Agree,
  AttendentType,
  BirthPlace,
  DeliveryMethod,
  Gender,
  Religion,
  Status,
} from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateDeathRegiserInput {
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
  @Field(() => Date)
  date_of_birth: Date;

  @IsNotEmpty()
  @Field(() => Gender)
  gender: Gender;

  @IsNotEmpty()
  @Field(() => String)
  name_of_deceased: string;

  @IsNotEmpty()
  @Field(() => Date)
  date_of_death: Date;

  @IsNotEmpty()
  @Field(() => String)
  father_name: string;

  @IsNotEmpty()
  @Field(() => String)
  mother_name: string;

  @IsNotEmpty()
  @Field(() => String)
  wife_name: string;

  @IsNotEmpty()
  @Field(() => BirthPlace)
  death_place: BirthPlace;

  @IsNotEmpty()
  @Field(() => String)
  death_place_name: string;

  @IsNotEmpty()
  @Field(() => String)
  current_address: string;

  @IsNotEmpty()
  @Field(() => String)
  permanent_address: string;

  @IsNotEmpty()
  @Field(() => String)
  death_place_address: string;

  @IsNotEmpty()
  @Field(() => Boolean)
  death_certified: boolean;

  @IsNotEmpty()
  @Field(() => Boolean)
  name_of_disease: boolean;

  @IsNotEmpty()
  @Field(() => Boolean)
  pregnancy_death: boolean;

  @IsNotEmpty()
  @Field(() => Boolean)
  smoker_death: boolean;

  @IsNotEmpty()
  @Field(() => Boolean)
  alcoholic_death: boolean;

  @IsNotEmpty()
  @Field(() => Religion)
  religion_deceased: Religion;

  @IsNotEmpty()
  @Field(() => Date)
  date_of_marriage: Date;

  @IsNotEmpty()
  @Field(() => AttendentType)
  attender_type: AttendentType;

  @IsNotEmpty()
  @Field(() => String)
  deceased_uid_url: string;

  @IsNotEmpty()
  @Field(() => String)
  father_uid_url: string;

  @IsNotEmpty()
  @Field(() => String)
  authority_letter_url: string;

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
