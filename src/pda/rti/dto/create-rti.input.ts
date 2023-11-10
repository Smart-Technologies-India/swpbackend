import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { Agree, Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

registerEnumType(Agree, {
  name: 'Agree',
});

registerEnumType(Status, {
  name: 'Status',
});

@InputType()
export class CreateRtiInput {
  @IsNotEmpty()
  @Field(() => Int)
  userId: number;

  @IsNotEmpty()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @Field(() => String)
  address: string;

  @IsNotEmpty()
  @Field(() => String)
  mobile: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  email: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  user_uid: string;

  @IsNotEmpty()
  @Field(() => String)
  subject_info: string;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  from_date: Date;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  to_date: Date;

  @IsNotEmpty()
  @Field(() => String)
  description: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  information: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  proverty_line_url: string;

  @IsOptional()
  @Field(() => Agree, { nullable: true })
  iagree: Agree;

  @IsOptional()
  @Field(() => String, { nullable: true })
  signature_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  remarks: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  attachments: string;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;
}
