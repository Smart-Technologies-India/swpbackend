import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DeathRegiserService } from './death_regiser.service';
import { DeathRegiser } from './entities/death_regiser.entity';
import { CreateDeathRegiserInput } from './dto/create-death_regiser.input';
import { UpdateDeathRegiserInput } from './dto/update-death_regiser.input';

@Resolver(() => DeathRegiser)
export class DeathRegiserResolver {
  constructor(private readonly deathRegiserService: DeathRegiserService) {}

  @Query(() => [DeathRegiser])
  getAllDeathRegister() {
    return this.deathRegiserService.getAllDeathRegister();
  }

  @Query(() => DeathRegiser)
  getDeathRegisterById(@Args('id', { type: () => Int }) id: number) {
    return this.deathRegiserService.getDeathRegisterById(id);
  }

  @Mutation(() => DeathRegiser)
  createDeathRegister(
    @Args('createDeathRegiserInput')
    createDeathRegiserInput: CreateDeathRegiserInput,
  ) {
    return this.deathRegiserService.createDeathRegister(
      createDeathRegiserInput,
    );
  }

  @Mutation(() => DeathRegiser)
  updateDeathRegisterById(
    @Args('updateDeathRegiserInput')
    updateDeathRegiserInput: UpdateDeathRegiserInput,
  ) {
    return this.deathRegiserService.updateDeathRegisterById(
      updateDeathRegiserInput,
    );
  }

  @Mutation(() => DeathRegiser)
  deleteDeathRegisterById(
    @Args('updateDeathRegiserInput')
    updateDeathRegiserInput: UpdateDeathRegiserInput,
  ) {
    return this.deathRegiserService.deleteDeathRegisterById(
      updateDeathRegiserInput,
    );
  }
}
