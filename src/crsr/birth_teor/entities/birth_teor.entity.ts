import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Agree, Gender, Status } from '@prisma/client';

@ObjectType()
export class BirthTeor {
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

  @Field(() => Gender, { nullable: true })
  gender: Gender;

  @Field(() => Date, { nullable: true })
  date_of_birth: Date;

  @Field(() => String, { nullable: true })
  father_name: string;

  @Field(() => String, { nullable: true })
  mother_name: string;

  @Field(() => String, { nullable: true })
  registration_number: String;

  @Field(() => Date, { nullable: true })
  date_of_registration: Date;

  @Field(() => String, { nullable: true })
  applicant_uid_url: string;

  @Field(() => String, { nullable: true })
  father_uid_url: string;

  @Field(() => String, { nullable: true })
  mother_uid_url: string;

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
