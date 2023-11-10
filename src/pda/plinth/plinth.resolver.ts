import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PlinthService } from './plinth.service';
import { Plinth } from './entities/plinth.entity';
import { CreatePlinthInput } from './dto/create-plinth.input';
import { UpdatePlinthInput } from './dto/update-plinth.input';

@Resolver(() => Plinth)
export class PlinthResolver {
  constructor(private readonly plinthService: PlinthService) {}

  
  @Query(() => [Plinth])
  getAllPlinth() {
    return this.plinthService.getAllPlinth();
  }

  @Query(() => Plinth)
  getPlinthById(@Args('id', { type: () => Int }) id: number) {
    return this.plinthService.getPlinthById(id);
  }

  @Mutation(() => Plinth)
  createPlinth(
    @Args('createPlinthInput') createPlinthInput: CreatePlinthInput,
  ) {
    return this.plinthService.createPlinth(createPlinthInput);
  }

  @Mutation(() => Plinth)
  updatePlinthById(
    @Args('updatePlinthInput') updatePlinthInput: UpdatePlinthInput,
  ) {
    return this.plinthService.updatePlinthById(updatePlinthInput);
  }

  @Mutation(() => Plinth)
  deletePlinthById(
    @Args('updatePlinthInput') updatePlinthInput: UpdatePlinthInput,
  ) {
    return this.plinthService.deletePlinthById(updatePlinthInput);
  }
}
