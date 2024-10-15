import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateNewrationcardmemberInput } from './create-newrationcardmember.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Gender, Status } from '@prisma/client';

@InputType()
export class UpdateNewrationcardmemberInput extends PartialType(
  CreateNewrationcardmemberInput,
) {
  @IsNotEmpty()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @Field(() => Int)
  userId: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  name: string;

  @IsOptional()
  @Field(() => Gender, { nullable: true })
  gender: Gender;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  date_of_birth: Date;

  @IsOptional()
  @Field(() => String, { nullable: true })
  mother_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  father_name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  spouse_name: string;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  option_to_life_commodity: boolean;

  @IsOptional()
  @Field(() => String, { nullable: true })
  age: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  eid: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  uid: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  relationship_with_head_of_family: string;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
