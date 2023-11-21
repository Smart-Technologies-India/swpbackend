import { IsNotEmpty, IsOptional } from 'class-validator';
import { InputType, Field, Int } from '@nestjs/graphql';
import { Department } from '@prisma/client';
import { UserType } from './filter-common.input';

@InputType()
export class FilterDepartmentCommonInput {
  @IsNotEmpty()
  @Field(() => UserType, { nullable: true })
  user_type: UserType;

  @IsNotEmpty()
  @Field(() => Int)
  user_id: number;

  @IsOptional()
  @Field(() => Department, { nullable: true })
  department: Department;
}
