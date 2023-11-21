import { IsNotEmpty, IsOptional } from 'class-validator';
import { InputType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { FormType } from '@prisma/client';

enum UserType {
  USER,
  DEPARTMENT,
}

export { UserType };

registerEnumType(UserType, {
  name: 'UserType',
});

@InputType()
export class FilterCommonInput {
  @IsNotEmpty()
  @Field(() => UserType, { nullable: true })
  user_type: UserType;

  @IsNotEmpty()
  @Field(() => Int)
  user_id: number;

  @IsOptional()
  @Field(() => FormType, { nullable: true })
  form_type: FormType;
}
