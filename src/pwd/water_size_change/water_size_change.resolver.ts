import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WaterSizeChangeService } from './water_size_change.service';
import { WaterSizeChange } from './entities/water_size_change.entity';
import { CreateWaterSizeChangeInput } from './dto/create-water_size_change.input';
import { UpdateWaterSizeChangeInput } from './dto/update-water_size_change.input';

@Resolver(() => WaterSizeChange)
export class WaterSizeChangeResolver {
  constructor(private readonly waterSizeChangeService: WaterSizeChangeService) {}

  @Query(() => [WaterSizeChange])
  getAllWaterSizeChange() {
    return this.waterSizeChangeService.getAllWaterSizeChange();
  }

  @Query(() => WaterSizeChange)
  getWaterSizeChangeById(@Args('id', { type: () => Int }) id: number) {
    return this.waterSizeChangeService.getWaterSizeChangeById(id);
  }

  @Mutation(() => WaterSizeChange)
  createWaterSizeChange(
    @Args('createWaterSizeChangeInput')
    createWaterSizeChangeInput: CreateWaterSizeChangeInput,
  ) {
    return this.waterSizeChangeService.createWaterSizeChange(
      createWaterSizeChangeInput,
    );
  }

  @Mutation(() => WaterSizeChange)
  updateWaterSizeChangeById(
    @Args('updateWaterSizeChangeInput')
    updateWaterSizeChangeInput: UpdateWaterSizeChangeInput,
  ) {
    return this.waterSizeChangeService.updateWaterSizeChangeById(
      updateWaterSizeChangeInput,
    );
  }

  @Mutation(() => WaterSizeChange)
  deleteWaterSizeChangeById(
    @Args('updateWaterSizeChangeInput')
    updateWaterSizeChangeInput: UpdateWaterSizeChangeInput,
  ) {
    return this.waterSizeChangeService.deleteWaterSizeChangeById(
      updateWaterSizeChangeInput,
    );
  }
}
