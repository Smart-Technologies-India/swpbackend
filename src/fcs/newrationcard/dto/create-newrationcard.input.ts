import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { Agree, CardType, GasConnection, Gender, Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

registerEnumType(CardType, {
  name: 'CardType',
});

registerEnumType(GasConnection, {
  name: 'GasConnection',
});

@InputType()
export class CreateNewrationcardInput {
  @IsNotEmpty()
  @Field(() => Int)
  userId: number;

  @IsNotEmpty()
  @Field(() => String)
  mobile: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  email: string;

  @IsNotEmpty()
  @Field(() => CardType)
  card_type: CardType;

  @IsOptional()
  @Field(() => String, { nullable: true })
  user_uid: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  user_eid: string;

  @IsNotEmpty()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @Field(() => String)
  mother_name: string;

  @IsNotEmpty()
  @Field(() => String)
  father_name: string;

  @IsNotEmpty()
  @Field(() => Gender)
  gender: Gender;

  @IsOptional()
  @Field(() => String, { nullable: true })
  spouse_name: string;

  @IsNotEmpty()
  @Field(() => Date)
  date_of_birth: Date;

  @IsNotEmpty()
  @Field(() => String)
  age: string;

  @IsNotEmpty()
  @Field(() => String)
  occupation: string;

  @IsNotEmpty()
  @Field(() => String)
  annual_income: string;

  @IsNotEmpty()
  @Field(() => GasConnection)
  gasconnection: GasConnection;

  @IsNotEmpty()
  @Field(() => String)
  gas_company_name: string;

  @IsNotEmpty()
  @Field(() => String)
  gas_agency_name: string;

  @IsNotEmpty()
  @Field(() => String)
  consumer_no: string;

  @IsNotEmpty()
  @Field(() => String)
  address: string;

  @IsNotEmpty()
  @Field(() => Int)
  village_id: number;

  @IsNotEmpty()
  @Field(() => String)
  pin_code: string;

  @IsNotEmpty()
  @Field(() => String)
  mandal: string;

  @IsNotEmpty()
  @Field(() => String)
  district: string;

  @IsNotEmpty()
  @Field(() => String)
  paddress: string;

  @IsNotEmpty()
  @Field(() => Int)
  pvillage_id: number;

  @IsNotEmpty()
  @Field(() => String)
  ppin_code: string;

  @IsNotEmpty()
  @Field(() => String)
  pmandal: string;

  @IsNotEmpty()
  @Field(() => String)
  pdistrict: string;

  @IsNotEmpty()
  @Field(() => String)
  old_ration_card_number: string;

  @IsNotEmpty()
  @Field(() => String)
  informate_name: string;

  @IsNotEmpty()
  @Field(() => String)
  informant_relation: string;

  @IsNotEmpty()
  @Field(() => String)
  delivery_type: string;

  @IsNotEmpty()
  @Field(() => String)
  mobile_no: string;

  @IsNotEmpty()
  @Field(() => String)
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
}
