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
export class DeathRegiser {
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
  name_of_deceased: string;

  @Field(() => Date)
  date_of_death: Date;

  @Field(() => String, { nullable: true })
  father_name: string;

  @Field(() => String, { nullable: true })
  mother_name: string;

  @Field(() => String, { nullable: true })
  wife_name: string;

  @Field(() => BirthPlace, { nullable: true })
  death_place: BirthPlace;

  @Field(() => String, { nullable: true })
  death_place_name: string;

  @Field(() => String, { nullable: true })
  current_address: string;

  @Field(() => String, { nullable: true })
  permanent_address: string;

  @Field(() => String, { nullable: true })
  death_place_address: string;

  @Field(() => Boolean, { nullable: true })
  death_certified: boolean;

  @Field(() => Boolean, { nullable: true })
  name_of_disease: boolean;

  @Field(() => Boolean, { nullable: true })
  pregnancy_death: boolean;

  @Field(() => Boolean, { nullable: true })
  smoker_death: boolean;

  @Field(() => Boolean, { nullable: true })
  alcoholic_death: boolean;

  @Field(() => Religion, { nullable: true })
  religion_deceased: Religion;

  @Field(() => Date, { nullable: true })
  date_of_marriage: Date;

  @Field(() => AttendentType, { nullable: true })
  attender_type: AttendentType;

  @Field(() => String, { nullable: true })
  deceased_uid_url: string;

  @Field(() => String, { nullable: true })
  father_uid_url: string;

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
