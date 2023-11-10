import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RtiService } from './rti.service';
import { Rti } from './entities/rti.entity';
import { CreateRtiInput } from './dto/create-rti.input';
import { UpdateRtiInput } from './dto/update-rti.input';

@Resolver(() => Rti)
export class RtiResolver {
  constructor(private readonly rtiService: RtiService) {}

  @Query(() => [Rti])
  getAllRti() {
    return this.rtiService.getAllRti();
  }

  @Query(() => Rti)
  getAllRtiById(@Args('id', { type: () => Int }) id: number) {
    return this.rtiService.getAllRtiById(id);
  }

  @Mutation(() => Rti)
  createRti(@Args('createRtiInput') createRtiInput: CreateRtiInput) {
    return this.rtiService.createRti(createRtiInput);
  }

  @Mutation(() => Rti)
  updateRtiById(@Args('updateRtiInput') updateRtiInput: UpdateRtiInput) {
    return this.rtiService.updateRtiById(updateRtiInput);
  }

  @Mutation(() => Rti)
  deleteRtiById(@Args('updateRtiInput') updateRtiInput: UpdateRtiInput) {
    return this.rtiService.deleteRtiById(updateRtiInput);
  }
}
