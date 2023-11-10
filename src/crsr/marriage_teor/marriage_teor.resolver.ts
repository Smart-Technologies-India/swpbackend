import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MarriageTeorService } from './marriage_teor.service';
import { MarriageTeor } from './entities/marriage_teor.entity';
import { CreateMarriageTeorInput } from './dto/create-marriage_teor.input';
import { UpdateMarriageTeorInput } from './dto/update-marriage_teor.input';

@Resolver(() => MarriageTeor)
export class MarriageTeorResolver {
  constructor(private readonly marriageTeorService: MarriageTeorService) {}

  
  @Query(() => [MarriageTeor])
  getAllMarriageTeor() {
    return this.marriageTeorService.getAllMarriageTeor();
  }

  @Query(() => MarriageTeor)
  getMarriageTeorById(@Args('id', { type: () => Int }) id: number) {
    return this.marriageTeorService.getMarriageTeorById(id);
  }

  @Mutation(() => MarriageTeor)
  createMarriageTeor(
    @Args('createMarriageTeorInput')
    createMarriageTeorInput: CreateMarriageTeorInput,
  ) {
    return this.marriageTeorService.createMarriageTeor(
      createMarriageTeorInput,
    );
  }

  @Mutation(() => MarriageTeor)
  updateMarriageTeorById(
    @Args('updateMarriageTeorInput')
    updateMarriageTeorInput: UpdateMarriageTeorInput,
  ) {
    return this.marriageTeorService.updateMarriageTeorById(
      updateMarriageTeorInput,
    );
  }

  @Mutation(() => MarriageTeor)
  deleteMarriageTeorById(
    @Args('updateMarriageTeorInput')
    updateMarriageTeorInput: UpdateMarriageTeorInput,
  ) {
    return this.marriageTeorService.deleteMarriageTeorById(
      updateMarriageTeorInput,
    );
  }
}
