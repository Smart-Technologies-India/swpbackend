import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { CreateNewrationcardmemberInput } from './create-newrationcardmember.input';

@InputType()
export class CreateMultipalNewrationcardmemberInput {
  @IsNotEmpty()
  @Field(() => [CreateNewrationcardmemberInput])
  members: CreateNewrationcardmemberInput[];
}
