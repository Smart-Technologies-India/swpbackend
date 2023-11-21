import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class FileCount {
  @Field(() => Int, { nullable: true })
  RTI: number;

  @Field(() => Int, { nullable: true })
  ZONE: number;

  @Field(() => Int, { nullable: true })
  OLDCOPY: number;

  @Field(() => Int, { nullable: true })
  PETROLEUM: number;

  @Field(() => Int, { nullable: true })
  UNAUTHORIZED: number;

  @Field(() => Int, { nullable: true })
  LANDRECORDS: number;

  @Field(() => Int, { nullable: true })
  MAMLATDAR: number;

  @Field(() => Int, { nullable: true })
  DEMOLITION: number;

  @Field(() => Int, { nullable: true })
  OC: number;

  @Field(() => Int, { nullable: true })
  CP: number;

  @Field(() => Int, { nullable: true })
  PLINTH: number;

  //pwd
  @Field(() => Int, { nullable: true })
  TEMPWATERCONNECT: number;

  @Field(() => Int, { nullable: true })
  TEMPWATERDISCONNECT: number;

  @Field(() => Int, { nullable: true })
  WATERSIZECHANGE: number;

  @Field(() => Int, { nullable: true })
  NEWWATERCONNECT: number;

  @Field(() => Int, { nullable: true })
  WATERRECONNECT: number;

  @Field(() => Int, { nullable: true })
  PERMANENTWATERDISCONNECT: number;

  //crsr
  @Field(() => Int, { nullable: true })
  BIRTHCERT: number;

  @Field(() => Int, { nullable: true })
  BIRTHTEOR: number;

  @Field(() => Int, { nullable: true })
  DEATHCERT: number;

  @Field(() => Int, { nullable: true })
  DEATHTEOR: number;

  @Field(() => Int, { nullable: true })
  MARRIAGECERT: number;

  @Field(() => Int, { nullable: true })
  MARRIAGETEOR: number;

  @Field(() => Int, { nullable: true })
  MARRIAGEREGISTER: number;

  //dmc
  @Field(() => Int, { nullable: true })
  DEATHREGISTER: number;

  @Field(() => Int, { nullable: true })
  BIRTHREGISTER: number;

  //est
  @Field(() => Int, { nullable: true })
  MARRIAGE: number;

  @Field(() => Int, { nullable: true })
  RELIGIOUS: number;

  @Field(() => Int, { nullable: true })
  ROADSHOW: number;
}
