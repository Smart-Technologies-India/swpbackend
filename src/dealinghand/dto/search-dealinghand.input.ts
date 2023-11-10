import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class SearchDealinghandInput {
  @IsOptional()
  @Field(() => String)
  file_type: string;

  @IsOptional()
  @Field(() => Boolean)
  collector: boolean;

  @IsOptional()
  @Field(() => Boolean)
  dycollector: boolean;

  @IsOptional()
  @Field(() => Boolean)
  atp: boolean;

  @IsOptional()
  @Field(() => Boolean)
  jtp: boolean;

  @IsOptional()
  @Field(() => Boolean)
  je: boolean;

  @IsOptional()
  @Field(() => Boolean)
  fieldinspector: boolean;

  @IsOptional()
  @Field(() => Boolean)
  sitesupervisor: boolean;

  @IsOptional()
  @Field(() => Boolean)
  architectassistant: boolean;

  @IsOptional()
  @Field(() => Boolean)
  planningdraughtsman: boolean;

  @IsOptional()
  @Field(() => Boolean)
  spdraughtsman: boolean;

  @IsOptional()
  @Field(() => Boolean)
  stdraughtsman: boolean;

  @IsOptional()
  @Field(() => Boolean)
  landsupted: boolean;

  @IsOptional()
  @Field(() => Boolean)
  mamlatdar: boolean;

  @IsOptional()
  @Field(() => Boolean)
  eocs: boolean;

  @IsOptional()
  @Field(() => Boolean)
  dept1: boolean;

  @IsOptional()
  @Field(() => Boolean)
  dept2: boolean;

  @IsOptional()
  @Field(() => Boolean)
  dept3: boolean;

  @IsOptional()
  @Field(() => Boolean)
  dept4: boolean;
}
