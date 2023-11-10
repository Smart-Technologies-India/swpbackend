import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { Agree, ClassType, NocType, OutletType, Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

registerEnumType(NocType, {
  name: 'NocType',
});
registerEnumType(ClassType, {
  name: 'ClassType',
});
registerEnumType(OutletType, {
  name: 'OutletType',
});

@InputType()
export class CreatePetroleumInput {
  @IsNotEmpty()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @Field(() => Int)
  userId: number;

  @IsNotEmpty()
  @Field(() => String)
  address: string;

  @IsNotEmpty()
  @Field(() => String)
  mobile: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  email: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  company_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  company_region: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  designation: string;

  @IsOptional()
  @Field(() => NocType, { nullable: true })
  noc_type: NocType;

  @IsOptional()
  @Field(() => ClassType, { nullable: true })
  class_type: ClassType;

  @IsOptional()
  @Field(() => OutletType, { nullable: true })
  outlet_type: OutletType;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  capacity: number;

  @IsNotEmpty()
  @Field(() => String)
  survey_no: string;

  @IsNotEmpty()
  @Field(() => Int)
  village_id: number;

  @IsNotEmpty()
  @Field(() => String)
  sub_division: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  noc_fire_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  na_order_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  sanad_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  coastguard_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  plan_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  explosive_url: string;

  @IsOptional()
  @Field(() => Agree, { nullable: true })
  iagree: Agree;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;
}
