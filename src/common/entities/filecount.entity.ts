import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FormType, Status, queryStatus } from '@prisma/client';

@ObjectType()
export class FileCount {
  @Field(() => Int)
  RTI: number;

  @Field(() => Int)
  ZONE: number;

  @Field(() => Int)
  OLDCOPY: number;

  @Field(() => Int)
  PETROLEUM: number;

  @Field(() => Int)
  UNAUTHORIZED: number;

  @Field(() => Int)
  LANDRECORDS: number;

  @Field(() => Int)
  MAMLATDAR: number;

  @Field(() => Int)
  DEMOLITION: number;

  @Field(() => Int)
  OC: number;

  @Field(() => Int)
  CP: number;

  @Field(() => Int)
  PLINTH: number;
}
