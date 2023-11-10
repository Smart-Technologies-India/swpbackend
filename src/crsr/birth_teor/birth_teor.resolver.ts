import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BirthTeorService } from './birth_teor.service';
import { BirthTeor } from './entities/birth_teor.entity';
import { CreateBirthTeorInput } from './dto/create-birth_teor.input';
import { UpdateBirthTeorInput } from './dto/update-birth_teor.input';

@Resolver(() => BirthTeor)
export class BirthTeorResolver {
  constructor(private readonly birthTeorService: BirthTeorService) {}

  @Query(() => [BirthTeor])
  getAllBirthTeor() {
    return this.birthTeorService.getAllBirthTeor();
  }

  @Query(() => BirthTeor)
  getBirthTeorById(@Args('id', { type: () => Int }) id: number) {
    return this.birthTeorService.getBirthTeorById(id);
  }

  @Mutation(() => BirthTeor)
  createBirthTeor(
    @Args('createBirthTeorInput')
    createBirthTeorInput: CreateBirthTeorInput,
  ) {
    return this.birthTeorService.createBirthTeor(
      createBirthTeorInput,
    );
  }

  @Mutation(() => BirthTeor)
  updateBirthTeorById(
    @Args('updateBirthTeorInput')
    updateBirthTeorInput: UpdateBirthTeorInput,
  ) {
    return this.birthTeorService.updateBirthTeorById(
      updateBirthTeorInput,
    );
  }

  @Mutation(() => BirthTeor)
  deleteBirthTeorById(
    @Args('updateBirthTeorInput')
    updateBirthTeorInput: UpdateBirthTeorInput,
  ) {
    return this.birthTeorService.deleteBirthTeorById(
      updateBirthTeorInput,
    );
  }
}
