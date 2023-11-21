import {
  ObjectType,
  Field,
  Int,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { Department, Role, Status } from '@prisma/client';

registerEnumType(Department, {
  name: 'Department',
});

registerEnumType(Role, {
  name: 'Role',
});

@ObjectType()
export class Auth {
  @Field(() => String)
  token: string;

  @Field(() => Int)
  id: number;

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

  @Field(() => Role)
  role: Role;

  @Field(() => Department)
  department: Department;

  @Field(() => Status)
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
