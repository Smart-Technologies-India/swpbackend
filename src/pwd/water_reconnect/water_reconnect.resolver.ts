import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WaterReconnectService } from './water_reconnect.service';
import { WaterReconnect } from './entities/water_reconnect.entity';
import { CreateWaterReconnectInput } from './dto/create-water_reconnect.input';
import { UpdateWaterReconnectInput } from './dto/update-water_reconnect.input';

@Resolver(() => WaterReconnect)
export class WaterReconnectResolver {
  constructor(private readonly waterReconnectService: WaterReconnectService) {}

  @Query(() => [WaterReconnect])
  getAllWaterReconnect() {
    return this.waterReconnectService.getAllWaterReconnect();
  }

  @Query(() => WaterReconnect)
  getWaterReconnectById(@Args('id', { type: () => Int }) id: number) {
    return this.waterReconnectService.getWaterReconnectById(id);
  }

  @Mutation(() => WaterReconnect)
  createWaterReconnect(
    @Args('createWaterReconnectInput')
    createWaterReconnectInput: CreateWaterReconnectInput,
  ) {
    return this.waterReconnectService.createWaterReconnect(
      createWaterReconnectInput,
    );
  }

  @Mutation(() => WaterReconnect)
  updateWaterReconnectById(
    @Args('updateWaterReconnectInput')
    updateWaterReconnectInput: UpdateWaterReconnectInput,
  ) {
    return this.waterReconnectService.updateWaterReconnectById(
      updateWaterReconnectInput,
    );
  }

  @Mutation(() => WaterReconnect)
  deleteWaterReconnectById(
    @Args('updateWaterReconnectInput')
    updateWaterReconnectInput: UpdateWaterReconnectInput,
  ) {
    return this.waterReconnectService.deleteWaterReconnectById(
      updateWaterReconnectInput,
    );
  }
}
