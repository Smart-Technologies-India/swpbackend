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
  @Field(() => FileProgressDetails, { nullable: true })
  RTI: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  ZONE: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  OLDCOPY: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  PETROLEUM: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  UNAUTHORIZED: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  LANDRECORDS: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  MAMLATDAR: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  DEMOLITION: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  OC: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  CP: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  PLINTH: FileProgressDetails;

  //dmc
  @Field(() => FileProgressDetails, { nullable: true })
  DEATHREGISTER: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  BIRTHREGISTER: FileProgressDetails;

  //crsr
  @Field(() => FileProgressDetails, { nullable: true })
  BIRTHCERT: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  BIRTHTEOR: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  DEATHCERT: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  DEATHTEOR: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  MARRIAGECERT: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  MARRIAGETEOR: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  MARRIAGEREGISTER: FileProgressDetails;

  //est
  @Field(() => FileProgressDetails, { nullable: true })
  ROADSHOW: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  RELIGIOUS: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  MARRIAGE: FileProgressDetails;

  //pwd
  @Field(() => FileProgressDetails, { nullable: true })
  PERMANENTWATERDISCONNECT: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  WATERRECONNECT: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  NEWWATERCONNECT: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  WATERSIZECHANGE: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  TEMPWATERDISCONNECT: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  TEMPWATERCONNECT: FileProgressDetails;

  @Field(() => FileProgressDetails, { nullable: true })
  NEWRATIONCARD: FileProgressDetails;
}
