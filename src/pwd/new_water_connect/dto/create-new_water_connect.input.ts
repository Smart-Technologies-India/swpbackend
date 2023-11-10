import { InputType, Int, Field } from '@nestjs/graphql';
import { Agree, ConnectionType, EntityType, MuncipalType, OwnerShipType, Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateNewWaterConnectInput {
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
  @Field(() => OwnerShipType)
  ownership_type: OwnerShipType;

  @IsNotEmpty()
  @Field(() => String)
  ward_number: string;

  @IsNotEmpty()
  @Field(() => MuncipalType)
  muncipal_type: MuncipalType;

  @IsNotEmpty()
  @Field(() => String)
  diameter: string;

  @IsNotEmpty()
  @Field(() => EntityType)
  entity_type: EntityType;

  @IsNotEmpty()
  @Field(() => ConnectionType)
  connection_type: ConnectionType;

  @IsNotEmpty()
  @Field(() => String)
  purpose: string;

  @IsNotEmpty()
  @Field(() => Date)
  from_date: Date;

  @IsNotEmpty()
  @Field(() => String)
  house_tax_url: string;

  @IsNotEmpty()
  @Field(() => String)
  applicant_uid_url: string;

  @IsNotEmpty()
  @Field(() => String)
  electric_bill_url: string;

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
