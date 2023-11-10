import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PetroleumService } from './petroleum.service';
import { Petroleum } from './entities/petroleum.entity';
import { CreatePetroleumInput } from './dto/create-petroleum.input';
import { UpdatePetroleumInput } from './dto/update-petroleum.input';

@Resolver(() => Petroleum)
export class PetroleumResolver {
  constructor(private readonly petroleumService: PetroleumService) {}

  @Query(() => [Petroleum])
  getAllPetroleum() {
    return this.petroleumService.getAllPetroleum();
  }

  @Query(() => Petroleum)
  getPetroleumById(@Args('id', { type: () => Int }) id: number) {
    return this.petroleumService.getPetroleumById(id);
  }

  @Mutation(() => Petroleum)
  createPetroleum(@Args('createPetroleumInput') createPetroleumInput: CreatePetroleumInput) {
    return this.petroleumService.createPetroleum(createPetroleumInput);
  }

  @Mutation(() => Petroleum)
  updatePetroleumById(@Args('updatePetroleumInput') updatePetroleumInput: UpdatePetroleumInput) {
    return this.petroleumService.updatePetroleumById(updatePetroleumInput);
  }

  @Mutation(() => Petroleum)
  deletePetroleumById(@Args('updatePetroleumInput') updatePetroleumInput: UpdatePetroleumInput) {
    return this.petroleumService.deletePetroleumById(updatePetroleumInput);
  }
}
