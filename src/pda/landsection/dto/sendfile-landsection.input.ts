import { InputType, Int, Field } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class SendFileLandsectionInput {
  @IsNotEmpty()
  @Field(() => String)
  stageId: string;

  @IsNotEmpty()
  @Field(() => String)
  formRefId: string;

  @IsNotEmpty()
  @Field(() => String)
  documentUrl: string;
}
