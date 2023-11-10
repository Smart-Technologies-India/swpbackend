import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
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

registerEnumType(Gender, {
  name: 'Gender',
});

registerEnumType(BirthPlace, {
  name: 'BirthPlace',
});

registerEnumType(AttendentType, {
  name: 'AttendentType',
});

registerEnumType(DeliveryMethod, {
  name: 'DeliveryMethod',
});
registerEnumType(Religion, {
  name: 'Religion',
});

@InputType()
export class CreateBirthRegisterInput {
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
  name_of_child: string;

  @IsNotEmpty()
  @Field(() => String)
  father_name: string;

  @IsNotEmpty()
  @Field(() => String)
  mother_name: string;

  @IsNotEmpty()
  @Field(() => String)
  grandfather_name: string;

  @IsNotEmpty()
  @Field(() => String)
  grandmother_name: string;

  @IsNotEmpty()
  @Field(() => BirthPlace)
  birth_place: BirthPlace;

  @IsNotEmpty()
  @Field(() => String)
  birth_place_name: string;

  @IsNotEmpty()
  @Field(() => String)
  current_address: string;

  @IsNotEmpty()
  @Field(() => String)
  permanent_address: string;

  @IsNotEmpty()
  @Field(() => Religion)
  religion_child: Religion;

  @IsNotEmpty()
  @Field(() => String)
  father_education: string;

  @IsNotEmpty()
  @Field(() => String)
  mother_education: string;

  @IsNotEmpty()
  @Field(() => String)
  father_occupation: string;

  @IsNotEmpty()
  @Field(() => String)
  mother_occupation: string;

  @IsNotEmpty()
  @Field(() => Date)
  mother_date_of_birth: Date;

  @IsNotEmpty()
  @Field(() => Date)
  date_of_marriage: Date;

  @IsNotEmpty()
  @Field(() => AttendentType)
  attender_type: AttendentType;

  @IsNotEmpty()
  @Field(() => DeliveryMethod)
  delivery_method: DeliveryMethod;

  @IsNotEmpty()
  @Field(() => String)
  weight_of_child_at_birth: string;

  @IsNotEmpty()
  @Field(() => Int)
  previous_child_count: number;

  @IsNotEmpty()
  @Field(() => Int)
  number_of_week_of_pregnency: number;

  @IsNotEmpty()
  @Field(() => String)
  father_uid_url: string;

  @IsNotEmpty()
  @Field(() => String)
  mother_uid_url: string;

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
