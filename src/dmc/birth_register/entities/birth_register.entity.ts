import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Agree,
  AttendentType,
  BirthPlace,
  DeliveryMethod,
  Gender,
  Religion,
  Status,
} from '@prisma/client';

@ObjectType()
export class BirthRegister {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  userId: number;

  @Field(() => String, { nullable: true })
  user_uid: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  address: string;

  @Field(() => String, { nullable: true })
  mobile: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => Int, { nullable: true })
  village_id: number;

  @Field(() => Date, { nullable: true })
  date_of_birth: Date;

  @Field(() => Gender, { nullable: true })
  gender: Gender;

  @Field(() => String, { nullable: true })
  name_of_child: string;

  @Field(() => String, { nullable: true })
  father_name: string;

  @Field(() => String, { nullable: true })
  mother_name: string;

  @Field(() => String, { nullable: true })
  grandfather_name: string;

  @Field(() => String, { nullable: true })
  grandmother_name: string;

  @Field(() => BirthPlace, { nullable: true })
  birth_place: BirthPlace;

  @Field(() => String, { nullable: true })
  birth_place_name: string;

  @Field(() => String, { nullable: true })
  current_address: string;

  @Field(() => String, { nullable: true })
  permanent_address: string;

  @Field(() => Religion, { nullable: true })
  religion_child: Religion;

  @Field(() => String, { nullable: true })
  father_education: string;

  @Field(() => String, { nullable: true })
  mother_education: string;

  @Field(() => String, { nullable: true })
  father_occupation: string;

  @Field(() => String, { nullable: true })
  mother_occupation: string;

  @Field(() => Date, { nullable: true })
  mother_date_of_birth: Date;

  @Field(() => Date, { nullable: true })
  date_of_marriage: Date;

  @Field(() => AttendentType, { nullable: true })
  attender_type: AttendentType;

  @Field(() => DeliveryMethod, { nullable: true })
  delivery_method: DeliveryMethod;

  @Field(() => String, { nullable: true })
  weight_of_child_at_birth: string;

  @Field(() => Int, { nullable: true })
  previous_child_count: number;

  @Field(() => Int, { nullable: true })
  number_of_week_of_pregnency: number;

  @Field(() => String, { nullable: true })
  father_uid_url: string;

  @Field(() => String, { nullable: true })
  mother_uid_url: string;

  @Field(() => String, { nullable: true })
  authority_letter_url: string;

  @Field(() => String, { nullable: true })
  undertaking_url: string;

  @Field(() => String, { nullable: true })
  signature_url: string;

  @Field(() => Agree, { nullable: true })
  iagree: Agree;

  @Field(() => String, { nullable: true })
  remarks: string;

  @Field(() => String, { nullable: true })
  other_remarks: string;

  @Field(() => String, { nullable: true })
  rejection_reason: string;

  @Field(() => String, { nullable: true })
  condition_to_follow: string;

  @Field(() => String, { nullable: true })
  certificate_id: string;

  @Field(() => Date, { nullable: true })
  certificate_date: Date;

  @Field(() => String, { nullable: true })
  certificate_url: string;

  @Field(() => Status, { nullable: true })
  status: Status;

  @Field(() => Date, { nullable: true })
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
