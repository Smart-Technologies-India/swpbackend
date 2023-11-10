import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TempWaterDisconnectService } from './temp_water_disconnect.service';
import { TempWaterDisconnect } from './entities/temp_water_disconnect.entity';
import { CreateTempWaterDisconnectInput } from './dto/create-temp_water_disconnect.input';
import { UpdateTempWaterDisconnectInput } from './dto/update-temp_water_disconnect.input';

@Resolver(() => TempWaterDisconnect)
export class TempWaterDisconnectResolver {
  constructor(
    private readonly tempWaterDisconnectService: TempWaterDisconnectService,
  ) {}

  @Query(() => [TempWaterDisconnect])
  getAllTempWaterDisconnect() {
    return this.tempWaterDisconnectService.getAllTempWaterDisconnect();
  }

  @Query(() => TempWaterDisconnect)
  getTempWaterDisconnectById(@Args('id', { type: () => Int }) id: number) {
    return this.tempWaterDisconnectService.getTempWaterDisconnectById(id);
  }

  @Mutation(() => TempWaterDisconnect)
  createTempWaterDisconnect(
    @Args('createTempWaterDisconnectInput')
    createTempWaterDisconnectInput: CreateTempWaterDisconnectInput,
  ) {
    return this.tempWaterDisconnectService.createTempWaterDisconnect(
      createTempWaterDisconnectInput,
    );
  }

  @Mutation(() => TempWaterDisconnect)
  updateTempWaterDisconnectById(
    @Args('updateTempWaterDisconnectInput')
    updateTempWaterDisconnectInput: UpdateTempWaterDisconnectInput,
  ) {
    return this.tempWaterDisconnectService.updateTempWaterDisconnectById(
      updateTempWaterDisconnectInput,
    );
  }

  @Mutation(() => TempWaterDisconnect)
  deleteTempWaterDisconnectById(
    @Args('updateTempWaterDisconnectInput')
    updateTempWaterDisconnectInput: UpdateTempWaterDisconnectInput,
  ) {
    return this.tempWaterDisconnectService.deleteTempWaterDisconnectById(
      updateTempWaterDisconnectInput,
    );
  }
}
