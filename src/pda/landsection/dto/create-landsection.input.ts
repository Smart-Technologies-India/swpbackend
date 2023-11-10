import { InputType, Int, Field } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateLandsectionInput {
  @IsNotEmpty()
  @Field(() => Int)
  userId: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  address: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  mobile: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  email: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  survey_no: string;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  village_id: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  area: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  na_type: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  zone: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  road_access: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  no_road_access: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  width_adequate: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  is_dimension_plot_adequate: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  is_crz: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  is_monument: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  other_remark: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  atp_recommendation: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  comments_dept: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  condition_to_follow: string;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;
}
