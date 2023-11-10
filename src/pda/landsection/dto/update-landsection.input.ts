import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateLandsectionInput } from './create-landsection.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Status } from '@prisma/client';

@InputType()
export class UpdateLandsectionInput extends PartialType(
  CreateLandsectionInput,
) {
  @IsNotEmpty()
  @Field(() => Int, { nullable: true })
  id: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
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
  is_mounment: string;

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
  @Field(() => String, { nullable: true })
  illegal_sqmt: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  attachments: string;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  recommend: boolean;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
