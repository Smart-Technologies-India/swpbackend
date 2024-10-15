import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PermanentWaterDisconnectService } from './permanent_water_disconnect.service';
import { PermanentWaterDisconnect } from './entities/permanent_water_disconnect.entity';
import { CreatePermanentWaterDisconnectInput } from './dto/create-permanent_water_disconnect.input';
import { UpdatePermanentWaterDisconnectInput } from './dto/update-permanent_water_disconnect.input';

@Resolver(() => PermanentWaterDisconnect)
export class PermanentWaterDisconnectResolver {
  constructor(
    private readonly permanentWaterDisconnectService: PermanentWaterDisconnectService,
  ) {}

  @Query(() => [PermanentWaterDisconnect])
  getAllPermanentWaterDisconnect() {
    return this.permanentWaterDisconnectService.getAllPermanentWaterDisconnect();
  }

  @Query(() => PermanentWaterDisconnect)
  getPermanentWaterDisconnectById(@Args('id', { type: () => Int }) id: number) {
    return this.permanentWaterDisconnectService.getPermanentWaterDisconnectById(
      id,
    );
  }

  @Mutation(() => PermanentWaterDisconnect)
  createPermanentWaterDisconnect(
    @Args('createPermanentWaterDisconnectInput')
    createPermanentWaterDisconnectInput: CreatePermanentWaterDisconnectInput,
  ) {
    return this.permanentWaterDisconnectService.createPermanentWaterDisconnect(
      createPermanentWaterDisconnectInput,
    );
  }

  @Mutation(() => PermanentWaterDisconnect)
  updatePermanentWaterDisconnectById(
    @Args('updatePermanentWaterDisconnectInput')
    updatePermanentWaterDisconnectInput: UpdatePermanentWaterDisconnectInput,
  ) {
    return this.permanentWaterDisconnectService.updatePermanentWaterDisconnectById(
      updatePermanentWaterDisconnectInput,
    );
  }

  @Mutation(() => PermanentWaterDisconnect)
  deletePermanentWaterDisconnectById(
    @Args('updatePermanentWaterDisconnectInput')
    updatePermanentWaterDisconnectInput: UpdatePermanentWaterDisconnectInput,
  ) {
    return this.permanentWaterDisconnectService.deletePermanentWaterDisconnectById(
      updatePermanentWaterDisconnectInput,
    );
  }
}
