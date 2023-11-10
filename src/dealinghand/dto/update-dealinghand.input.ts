import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateDealinghandInput } from './create-dealinghand.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { FormType } from '@prisma/client';

@InputType()
export class UpdateDealinghandInput extends PartialType(
  CreateDealinghandInput,
) {
  @IsNotEmpty()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @Field(() => FormType, { nullable: true })
  file_type: FormType;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  collector: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  dycollector: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  atp: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  jtp: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  je: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  fieldinspector: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  sitesupervisor: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  architectassistant: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  planningdraughtsman: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  spdraughtsman: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  stdraughtsman: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  landsupted: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  mamlatdar: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  eocs: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  dept1: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  dept2: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  dept3: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  dept4: boolean;
}
