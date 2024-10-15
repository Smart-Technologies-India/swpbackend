import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Agree, CardType, GasConnection, Gender, Status } from '@prisma/client';
import { Newrationcardmember } from 'src/fcs/newrationcardmembers/entities/newrationcardmember.entity';

@ObjectType()
export class Newrationcard {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  userId: number;

  @Field(() => String, { nullable: true })
  mobile: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => CardType, { nullable: true })
  card_type: CardType;

  @Field(() => String, { nullable: true })
  user_uid: string;

  @Field(() => String, { nullable: true })
  user_eid: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  mother_name: string;

  @Field(() => String, { nullable: true })
  father_name: string;

  @Field(() => Gender, { nullable: true })
  gender: Gender;

  @Field(() => String, { nullable: true })
  spouse_name: string;

  @Field(() => Date, { nullable: true })
  date_of_birth: Date;

  @Field(() => String, { nullable: true })
  age: string;

  @Field(() => String, { nullable: true })
  occupation: string;

  @Field(() => String, { nullable: true })
  annual_income: string;

  @Field(() => GasConnection, { nullable: true })
  gasconnection: GasConnection;

  @Field(() => String, { nullable: true })
  gas_company_name: string;

  @Field(() => String, { nullable: true })
  gas_agency_name: string;

  @Field(() => String, { nullable: true })
  consumer_no: string;

  @Field(() => String, { nullable: true })
  address: string;

  @Field(() => Int, { nullable: true })
  village_id: number;

  @Field(() => String, { nullable: true })
  pin_code: string;

  @Field(() => String, { nullable: true })
  mandal: string;

  @Field(() => String, { nullable: true })
  district: string;

  @Field(() => String, { nullable: true })
  paddress: string;

  @Field(() => Int, { nullable: true })
  pvillage_id: number;

  @Field(() => String, { nullable: true })
  ppin_code: string;

  @Field(() => String, { nullable: true })
  pmandal: string;

  @Field(() => String, { nullable: true })
  pdistrict: string;

  @Field(() => String, { nullable: true })
  old_ration_card_number: string;

  @Field(() => String, { nullable: true })
  informate_name: string;

  @Field(() => String, { nullable: true })
  informant_relation: string;

  @Field(() => String, { nullable: true })
  delivery_type: string;

  @Field(() => String, { nullable: true })
  mobile_no: string;

  @Field(() => String, { nullable: true })
  photo: string;

  @Field(() => String, { nullable: true })
  proof_one: string;

  @Field(() => String, { nullable: true })
  proof_one_name: string;

  @Field(() => String, { nullable: true })
  proof_two: string;

  @Field(() => String, { nullable: true })
  proof_two_name: string;

  @Field(() => String, { nullable: true })
  proof_three: string;

  @Field(() => String, { nullable: true })
  proof_three_name: string;

  @Field(() => String, { nullable: true })
  signature_url: string;

  @Field(() => Agree, { nullable: true })
  iagree: Agree;

  @Field(() => String, { nullable: true })
  remarks: string;

  @Field(() => String, { nullable: true })
  other_remarks: string;

  @Field(() => Status)
  status: Status;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;

  @Field(() => [Newrationcardmember], { nullable: true })
  members: Newrationcardmember[];
}
