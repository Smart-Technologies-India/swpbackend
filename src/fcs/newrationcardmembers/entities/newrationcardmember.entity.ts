import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Gender, Status } from '@prisma/client';

@ObjectType()
export class Newrationcardmember {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => Gender)
  gender: Gender;

  @Field(() => Date, { nullable: true })
  date_of_birth: Date;

  @Field(() => String, { nullable: true })
  mother_name: string;

  @Field(() => String, { nullable: true })
  father_name: string;

  @Field(() => String, { nullable: true })
  spouse_name: string;

  @Field(() => Boolean)
  option_to_life_commodity: boolean;

  @Field(() => String, { nullable: true })
  age: string;

  @Field(() => String, { nullable: true })
  eid: string;

  @Field(() => String, { nullable: true })
  uid: string;

  @Field(() => String, { nullable: true })
  relationship_with_head_of_family: string;

  @Field(() => Status, { nullable: true })
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
