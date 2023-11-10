import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Department, Role, Status } from '@prisma/client';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  design_point_id: number;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String, { nullable: true })
  contact: string;

  @Field(() => String, { nullable: true })
  otp: string;

  @Field(() => String, { nullable: true })
  pic_url: string;

  @Field(() => String, { nullable: true })
  access_kay: string;

  @Field(() => Role)
  role: Role;

  @Field(() => Department)
  department: Department;

  @Field(() => String, { nullable: true })
  address: string;

  @Field(() => String, { nullable: true })
  user_uid: string;

  @Field(() => Status)
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
