import { InputType, Int, Field } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class OutsideLandsectionInput {
  @IsNotEmpty()
  @Field(() => Int)
  form_id: number;

  @IsNotEmpty()
  @Field(() => Int)
  stage_id: number;

  @IsNotEmpty()
  @Field(() => Int)
  village_id: number;

  @IsNotEmpty()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @Field(() => String)
  survey_no: string;

  @IsNotEmpty()
  @Field(() => String)
  area: string;

  @IsNotEmpty()
  @Field(() => String)
  purpose: string;

  @IsNotEmpty()
  @Field(() => String)
  number: string;
}
