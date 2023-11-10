import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Agree, Religion, Status } from '@prisma/client';

@ObjectType()
export class MarriageRegister {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  userId: number;

  @Field(() => String, { nullable: true })
  user_uid: string;

  @Field(() => String, { nullable: true })
  mobile: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => Int, { nullable: true })
  village_id: number;

  @Field(() => String, { nullable: true })
  groom_name: string;

  @Field(() => String, { nullable: true })
  groom_address: string;

  @Field(() => Date, { nullable: true })
  groom_date_of_birth: Date;

  @Field(() => Religion, { nullable: true })
  religion_groom: Religion;

  @Field(() => String, { nullable: true })
  groom_father_name: string;

  @Field(() => String, { nullable: true })
  groom_mother_name: string;

  @Field(() => String, { nullable: true })
  bride_name: string;

  @Field(() => String, { nullable: true })
  bride_address: string;

  @Field(() => Date, { nullable: true })
  bride_date_of_birth: Date;

  @Field(() => Religion, { nullable: true })
  religion_bride: Religion;

  @Field(() => String, { nullable: true })
  bride_father_name: string;

  @Field(() => String, { nullable: true })
  bride_mother_name: string;

  @Field(() => Date, { nullable: true })
  date_of_marriage: Date;

  @Field(() => String, { nullable: true })
  witness_one_details: string;

  @Field(() => String, { nullable: true })
  witness_two_details: string;

  @Field(() => String, { nullable: true })
  witness_three_details: string;

  @Field(() => String, { nullable: true })
  joint_bride_groom_photo_url: string;

  @Field(() => String, { nullable: true })
  applicant_uid_url: string;

  @Field(() => String, { nullable: true })
  bride_uid_url: string;

  @Field(() => String, { nullable: true })
  bride_url: string;

  @Field(() => String, { nullable: true })
  witness_one_signature_url: string;

  @Field(() => String, { nullable: true })
  witness_two_signature_url: string;

  @Field(() => String, { nullable: true })
  witness_three_signature_url: string;

  @Field(() => String, { nullable: true })
  undertaking_url: string;

  @Field(() => String, { nullable: true })
  groom_signature_url: string;

  @Field(() => String, { nullable: true })
  bride_signature_url: string;

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
