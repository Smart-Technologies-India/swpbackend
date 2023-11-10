import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NewWaterConnectService } from './new_water_connect.service';
import { NewWaterConnect } from './entities/new_water_connect.entity';
import { CreateNewWaterConnectInput } from './dto/create-new_water_connect.input';
import { UpdateNewWaterConnectInput } from './dto/update-new_water_connect.input';

@Resolver(() => NewWaterConnect)
export class NewWaterConnectResolver {
  constructor(private readonly newWaterConnectService: NewWaterConnectService) {}

  @Query(() => [NewWaterConnect])
  getAllNewWaterConnect() {
    return this.newWaterConnectService.getAllNewWaterConnect();
  }

  @Query(() => NewWaterConnect)
  getNewWaterConnectById(@Args('id', { type: () => Int }) id: number) {
    return this.newWaterConnectService.getNewWaterConnectById(id);
  }

  @Mutation(() => NewWaterConnect)
  createNewWaterConnect(
    @Args('createNewWaterConnectInput')
    createNewWaterConnectInput: CreateNewWaterConnectInput,
  ) {
    return this.newWaterConnectService.createNewWaterConnect(
      createNewWaterConnectInput,
    );
  }

  @Mutation(() => NewWaterConnect)
  updateNewWaterConnectById(
    @Args('updateNewWaterConnectInput')
    updateNewWaterConnectInput: UpdateNewWaterConnectInput,
  ) {
    return this.newWaterConnectService.updateNewWaterConnectById(
      updateNewWaterConnectInput,
    );
  }

  @Mutation(() => NewWaterConnect)
  deleteNewWaterConnectById(
    @Args('updateNewWaterConnectInput')
    updateNewWaterConnectInput: UpdateNewWaterConnectInput,
  ) {
    return this.newWaterConnectService.deleteNewWaterConnectById(
      updateNewWaterConnectInput,
    );
  }
}
