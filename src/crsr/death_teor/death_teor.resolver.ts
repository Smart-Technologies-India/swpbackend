import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DeathTeorService } from './death_teor.service';
import { DeathTeor } from './entities/death_teor.entity';
import { CreateDeathTeorInput } from './dto/create-death_teor.input';
import { UpdateDeathTeorInput } from './dto/update-death_teor.input';

@Resolver(() => DeathTeor)
export class DeathTeorResolver {
  constructor(private readonly deathTeorService: DeathTeorService) {}

  @Query(() => [DeathTeor])
  getAllDeathTeor() {
    return this.deathTeorService.getAllDeathTeor();
  }

  @Query(() => DeathTeor)
  getDeathTeorById(@Args('id', { type: () => Int }) id: number) {
    return this.deathTeorService.getDeathTeorById(id);
  }

  @Mutation(() => DeathTeor)
  createDeathTeor(
    @Args('createDeathTeorInput')
    createDeathTeorInput: CreateDeathTeorInput,
  ) {
    return this.deathTeorService.createDeathTeor(
      createDeathTeorInput,
    );
  }

  @Mutation(() => DeathTeor)
  updateDeathTeorById(
    @Args('updateDeathTeorInput')
    updateDeathTeorInput: UpdateDeathTeorInput,
  ) {
    return this.deathTeorService.updateDeathTeorById(
      updateDeathTeorInput,
    );
  }

  @Mutation(() => DeathTeor)
  deleteDeathTeorById(
    @Args('updateDeathTeorInput')
    updateDeathTeorInput: UpdateDeathTeorInput,
  ) {
    return this.deathTeorService.deleteDeathTeorById(
      updateDeathTeorInput,
    );
  }
}
