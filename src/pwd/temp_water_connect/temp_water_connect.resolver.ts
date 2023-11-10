import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TempWaterConnectService } from './temp_water_connect.service';
import { TempWaterConnect } from './entities/temp_water_connect.entity';
import { CreateTempWaterConnectInput } from './dto/create-temp_water_connect.input';
import { UpdateTempWaterConnectInput } from './dto/update-temp_water_connect.input';

@Resolver(() => TempWaterConnect)
export class TempWaterConnectResolver {
  constructor(private readonly tempWaterConnectService: TempWaterConnectService) {}

  @Query(() => [TempWaterConnect])
  getAllTempWaterConnect() {
    return this.tempWaterConnectService.getAllTempWaterConnect();
  }

  @Query(() => TempWaterConnect)
  getTempWaterConnectById(@Args('id', { type: () => Int }) id: number) {
    return this.tempWaterConnectService.getTempWaterConnectById(id);
  }

  @Mutation(() => TempWaterConnect)
  createTempWaterConnect(
    @Args('createTempWaterConnectInput')
    createTempWaterConnectInput: CreateTempWaterConnectInput,
  ) {
    return this.tempWaterConnectService.createTempWaterConnect(
      createTempWaterConnectInput,
    );
  }

  @Mutation(() => TempWaterConnect)
  updateTempWaterConnectById(
    @Args('updateTempWaterConnectInput')
    updateTempWaterConnectInput: UpdateTempWaterConnectInput,
  ) {
    return this.tempWaterConnectService.updateTempWaterConnectById(
      updateTempWaterConnectInput,
    );
  }

  @Mutation(() => TempWaterConnect)
  deleteTempWaterConnectById(
    @Args('updateTempWaterConnectInput')
    updateTempWaterConnectInput: UpdateTempWaterConnectInput,
  ) {
    return this.tempWaterConnectService.deleteTempWaterConnectById(
      updateTempWaterConnectInput,
    );
  }
}
