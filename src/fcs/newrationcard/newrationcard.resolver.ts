import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NewrationcardService } from './newrationcard.service';
import { Newrationcard } from './entities/newrationcard.entity';
import { CreateNewrationcardInput } from './dto/create-newrationcard.input';
import { UpdateNewrationcardInput } from './dto/update-newrationcard.input';

@Resolver(() => Newrationcard)
export class NewrationcardResolver {
  constructor(private readonly newrationcardService: NewrationcardService) {}

  @Query(() => [Newrationcard])
  getAllRationCard() {
    return this.newrationcardService.getAllRationCard();
  }

  @Query(() => Newrationcard)
  getRationCardById(@Args('id', { type: () => Int }) id: number) {
    return this.newrationcardService.getRationCardById(id);
  }

  @Mutation(() => Newrationcard)
  createRationCard(
    @Args('createNewrationcardInput')
    createNewrationcardInput: CreateNewrationcardInput,
  ) {
    return this.newrationcardService.createRationCard(createNewrationcardInput);
  }

  @Mutation(() => Newrationcard)
  updateRationCardById(
    @Args('updateNewrationcardInput')
    updateNewrationcardInput: UpdateNewrationcardInput,
  ) {
    return this.newrationcardService.updateRationCardById(
      updateNewrationcardInput,
    );
  }

  @Mutation(() => Newrationcard)
  deleteRationCardById(
    @Args('updateNewrationcardInput')
    updateNewrationcardInput: UpdateNewrationcardInput,
  ) {
    return this.newrationcardService.deleteRationCardById(
      updateNewrationcardInput,
    );
  }
}
