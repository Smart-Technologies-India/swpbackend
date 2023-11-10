import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DealinghandService } from './dealinghand.service';
import { Dealinghand } from './entities/dealinghand.entity';
import { CreateDealinghandInput } from './dto/create-dealinghand.input';
import { UpdateDealinghandInput } from './dto/update-dealinghand.input';
import { SearchDealinghandInput } from './dto/search-dealinghand.input';

@Resolver(() => Dealinghand)
export class DealinghandResolver {
  constructor(private readonly dealinghandService: DealinghandService) {}

  @Query(() => [Dealinghand])
  getAllDealingHand() {
    return this.dealinghandService.getAllDealingHand();
  }

  @Query(() => Dealinghand)
  getDealingHandById(@Args('id', { type: () => Int }) id: number) {
    return this.dealinghandService.getDealingHandById(id);
  }

  @Query(() => [Dealinghand])
  searchDealingHand(
    @Args('searchDealinghandInput')
    searchDealinghandInput: SearchDealinghandInput,
  ) {
    return this.dealinghandService.searchDealingHand(searchDealinghandInput);
  }

  @Mutation(() => Dealinghand)
  createDealingHand(
    @Args('createDealinghandInput')
    createDealinghandInput: CreateDealinghandInput,
  ) {
    return this.dealinghandService.createDealingHand(createDealinghandInput);
  }

  @Mutation(() => Dealinghand)
  updateDealingHandById(
    @Args('updateDealinghandInput')
    updateDealinghandInput: UpdateDealinghandInput,
  ) {
    return this.dealinghandService.updateDealingHandById(
      updateDealinghandInput,
    );
  }

  @Query(() => Int)
  getuserid(@Args('filetype', { type: () => String }) filetype: string) {
    return this.dealinghandService.getuserid(filetype);
  }
}
