import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Agree, ConnectionType, EntityType, MuncipalType, OwnerShipType, Status } from '@prisma/client';

@ObjectType()
export class WaterSizeChange {
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

  @Field(() => OwnerShipType, { nullable: true })
  ownership_type: OwnerShipType;

  @Field(() => String, { nullable: true })
  ward_number: string;

  @Field(() => MuncipalType, { nullable: true })
  muncipal_type: MuncipalType;

  @Field(() => String, { nullable: true })
  old_diameter: string;

  @Field(() => String, { nullable: true })
  new_diameter: string;

  @Field(() => EntityType, { nullable: true })
  entity_type: EntityType;

  @Field(() => ConnectionType, { nullable: true })
  connection_type: ConnectionType;

  @Field(() => String, { nullable: true })
  purpose: string;

  @Field(() => String, { nullable: true })
  meter_number: string;

  @Field(() => String, { nullable: true })
  house_tax_url: string;

  @Field(() => String, { nullable: true })
  applicant_uid_url: string;

  @Field(() => String, { nullable: true })
  electric_bill_url: string;

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
