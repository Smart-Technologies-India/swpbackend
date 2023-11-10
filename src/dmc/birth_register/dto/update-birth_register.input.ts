import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateBirthRegisterInput } from './create-birth_register.input';
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
export class UpdateBirthRegisterInput extends PartialType(
  CreateBirthRegisterInput,
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
  name_of_child: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  father_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  mother_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  grandfather_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  grandmother_name: string;

  @IsOptional()
  @Field(() => BirthPlace, { nullable: true })
  birth_place: BirthPlace;

  @IsOptional()
  @Field(() => String, { nullable: true })
  birth_place_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  current_address: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  permanent_address: string;

  @IsOptional()
  @Field(() => Religion, { nullable: true })
  religion_child: Religion;

  @IsOptional()
  @Field(() => String, { nullable: true })
  father_education: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  mother_education: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  father_occupation: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  mother_occupation: string;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  mother_date_of_birth: Date;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  date_of_marriage: Date;

  @IsOptional()
  @Field(() => AttendentType, { nullable: true })
  attender_type: AttendentType;

  @IsOptional()
  @Field(() => DeliveryMethod, { nullable: true })
  delivery_method: DeliveryMethod;

  @IsOptional()
  @Field(() => String, { nullable: true })
  weight_of_child_at_birth: string;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  previous_child_count: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  number_of_week_of_pregnency: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  father_uid_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  mother_uid_url: string;

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
