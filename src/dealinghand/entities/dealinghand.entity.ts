import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Dealinghand {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  file_type: string;

  @Field(() => Boolean)
  collector: boolean;

  @Field(() => Boolean)
  dycollector: boolean;

  @Field(() => Boolean)
  atp: boolean;

  @Field(() => Boolean)
  jtp: boolean;

  @Field(() => Boolean)
  je: boolean;

  @Field(() => Boolean)
  fieldinspector: boolean;

  @Field(() => Boolean)
  sitesupervisor: boolean;

  @Field(() => Boolean)
  architectassistant: boolean;

  @Field(() => Boolean)
  planningdraughtsman: boolean;

  @Field(() => Boolean)
  spdraughtsman: boolean;

  @Field(() => Boolean)
  stdraughtsman: boolean;

  @Field(() => Boolean)
  landsupted: boolean;

  @Field(() => Boolean)
  mamlatdar: boolean;

  @Field(() => Boolean)
  eocs: boolean;

  @Field(() => Boolean)
  dept1: boolean;

  @Field(() => Boolean)
  dept2: boolean;

  @Field(() => Boolean)
  dept3: boolean;

  @Field(() => Boolean)
  dept4: boolean;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
