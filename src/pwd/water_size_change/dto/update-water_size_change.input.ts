import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateWaterSizeChangeInput } from './create-water_size_change.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import {
  Agree,
  ConnectionType,
  EntityType,
  MuncipalType,
  OwnerShipType,
  Status,
} from '@prisma/client';

@InputType()
export class UpdateWaterSizeChangeInput extends PartialType(
  CreateWaterSizeChangeInput,
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
  @Field(() => OwnerShipType, { nullable: true })
  ownership_type: OwnerShipType;

  @IsOptional()
  @Field(() => String, { nullable: true })
  ward_number: string;

  @IsOptional()
  @Field(() => MuncipalType, { nullable: true })
  muncipal_type: MuncipalType;

  @IsOptional()
  @Field(() => String, { nullable: true })
  old_diameter: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  new_diameter: string;

  @IsOptional()
  @Field(() => EntityType, { nullable: true })
  entity_type: EntityType;

  @IsOptional()
  @Field(() => ConnectionType, { nullable: true })
  connection_type: ConnectionType;

  @IsOptional()
  @Field(() => String, { nullable: true })
  purpose: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  meter_number: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  house_tax_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  applicant_uid_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  electric_bill_url: string;

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
