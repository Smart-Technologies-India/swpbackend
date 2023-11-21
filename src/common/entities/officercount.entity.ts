import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class OfficerCount {
  @Field(() => Int)
  count: number;

  @Field(() => String)
  auth_user_id: string;
}
