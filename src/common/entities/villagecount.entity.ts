import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class VillageCount {
  @Field(() => Int)
  count: number;

  @Field(() => String)
  village: string;
}
