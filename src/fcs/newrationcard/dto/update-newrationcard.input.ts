import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateNewrationcardInput } from './create-newrationcard.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Agree, CardType, GasConnection, Gender, Status } from '@prisma/client';

@InputType()
export class UpdateNewrationcardInput extends PartialType(
  CreateNewrationcardInput,
) {
  @IsNotEmpty()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  userId: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  mobile: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  email: string;

  @IsOptional()
  @Field(() => CardType, { nullable: true })
  card_type: CardType;

  @IsOptional()
  @Field(() => String, { nullable: true })
  user_uid: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  user_eid: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  mother_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  father_name: string;

  @IsOptional()
  @Field(() => Gender, { nullable: true })
  gender: Gender;

  @IsOptional()
  @Field(() => String, { nullable: true })
  spouse_name: string;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  date_of_birth: Date;

  @IsOptional()
  @Field(() => String, { nullable: true })
  age: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  occupation: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  annual_income: string;

  @IsOptional()
  @Field(() => GasConnection, { nullable: true })
  gasconnection: GasConnection;

  @IsOptional()
  @Field(() => String, { nullable: true })
  gas_company_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  gas_agency_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  consumer_no: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  address: string;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  village_id: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  pin_code: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  mandal: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  district: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  paddress: string;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  pvillage_id: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  ppin_code: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  pmandal: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  pdistrict: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  old_ration_card_number: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  informate_name: string;

  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  informant_relation: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  delivery_type: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  mobile_no: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  photo: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  proof_one: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  proof_one_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  proof_two: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  proof_two_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  proof_three: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  proof_three_name: string;

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
  @Field(() => Status, { nullable: true })
  status: Status;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
