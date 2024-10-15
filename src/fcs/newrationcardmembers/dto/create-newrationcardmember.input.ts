import { InputType, Int, Field } from '@nestjs/graphql';
import { Gender, Status } from '@prisma/client';
import { IsOptional } from 'class-validator';

@InputType()
export class CreateNewrationcardmemberInput {
  @IsOptional()
  @Field(() => Int)
  userId: number;

  @IsOptional()
  @Field(() => String)
  name: string;

  @IsOptional()
  @Field(() => Gender)
  gender: Gender;

  @IsOptional()
  @Field(() => Date)
  date_of_birth: Date;

  @IsOptional()
  @Field(() => String)
  mother_name: string;

  @IsOptional()
  @Field(() => String)
  father_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  spouse_name: string;

  @IsOptional()
  @Field(() => Boolean)
  option_to_life_commodity: boolean;

  @IsOptional()
  @Field(() => String)
  age: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  eid: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  uid: string;

  @IsOptional()
  @Field(() => String)
  relationship_with_head_of_family: string;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;
}
