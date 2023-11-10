import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Status } from '@prisma/client';

@ObjectType()
export class Landsection {
  @Field(() => Int, { nullable: true })
  id: number;

  @Field(() => Int, { nullable: true })
  userId: number;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  address: string;

  @Field(() => String, { nullable: true })
  mobile: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String, { nullable: true })
  survey_no: string;

  @Field(() => Int, { nullable: true })
  village_id: number;

  @Field(() => String, { nullable: true })
  area: string;

  @Field(() => String, { nullable: true })
  na_type: string;

  @Field(() => String, { nullable: true })
  zone: string;

  @Field(() => String, { nullable: true })
  road_access: string;

  @Field(() => String, { nullable: true })
  no_road_access: string;

  @Field(() => String, { nullable: true })
  width_adequate: string;

  @Field(() => String, { nullable: true })
  is_dimension_plot_adequate: string;

  @Field(() => String, { nullable: true })
  is_crz: string;

  @Field(() => String, { nullable: true })
  is_monument: string;

  @Field(() => String, { nullable: true })
  other_remark: string;

  @Field(() => String, { nullable: true })
  atp_recommendation: string;

  @Field(() => String, { nullable: true })
  comments_dept: string;

  @Field(() => String, { nullable: true })
  condition_to_follow: string;

  @Field(() => String, { nullable: true })
  land_formid: string;

  @Field(() => String, { nullable: true })
  land_stageid: string;

  @Field(() => String, { nullable: true })
  illegal_sqmt: string;

  @Field(() => String, { nullable: true })
  attachments: string;

  @Field(() => Boolean, { nullable: true })
  recommend: boolean;

  @Field(() => Status)
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
