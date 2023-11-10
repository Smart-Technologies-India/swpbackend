import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
class FileProgressDetails {
  @Field(() => Int)
  pending: number;
  @Field(() => Int)
  completed: number;
  @Field(() => Int)
  rejected: number;
}

@ObjectType()
export class FileProgress {
  @Field(() => FileProgressDetails)
  RTI: FileProgressDetails;

  @Field(() => FileProgressDetails)
  ZONE: FileProgressDetails;

  @Field(() => FileProgressDetails)
  OLDCOPY: FileProgressDetails;

  @Field(() => FileProgressDetails)
  PETROLEUM: FileProgressDetails;

  @Field(() => FileProgressDetails)
  UNAUTHORIZED: FileProgressDetails;

  @Field(() => FileProgressDetails)
  LANDRECORDS: FileProgressDetails;

  @Field(() => FileProgressDetails)
  MAMLATDAR: FileProgressDetails;

  @Field(() => FileProgressDetails)
  DEMOLITION: FileProgressDetails;

  @Field(() => FileProgressDetails)
  OC: FileProgressDetails;

  @Field(() => FileProgressDetails)
  CP: FileProgressDetails;

  @Field(() => FileProgressDetails)
  PLINTH: FileProgressDetails;
}
