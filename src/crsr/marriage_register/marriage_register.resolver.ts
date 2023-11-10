import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MarriageRegisterService } from './marriage_register.service';
import { MarriageRegister } from './entities/marriage_register.entity';
import { CreateMarriageRegisterInput } from './dto/create-marriage_register.input';
import { UpdateMarriageRegisterInput } from './dto/update-marriage_register.input';

@Resolver(() => MarriageRegister)
export class MarriageRegisterResolver {
  constructor(private readonly marriageRegisterService: MarriageRegisterService) {}
  @Query(() => [MarriageRegister])
  getAllMarriageRegister() {
    return this.marriageRegisterService.getAllMarriageRegister();
  }

  @Query(() => MarriageRegister)
  getMarriageRegisterById(@Args('id', { type: () => Int }) id: number) {
    return this.marriageRegisterService.getMarriageRegisterById(id);
  }

  @Mutation(() => MarriageRegister)
  createMarriageRegister(
    @Args('createMarriageRegisterInput')
    createMarriageRegisterInput: CreateMarriageRegisterInput,
  ) {
    return this.marriageRegisterService.createMarriageRegister(
      createMarriageRegisterInput,
    );
  }

  @Mutation(() => MarriageRegister)
  updateMarriageRegisterById(
    @Args('updateMarriageRegisterInput')
    updateMarriageRegisterInput: UpdateMarriageRegisterInput,
  ) {
    return this.marriageRegisterService.updateMarriageRegisterById(
      updateMarriageRegisterInput,
    );
  }

  @Mutation(() => MarriageRegister)
  deleteMarriageRegisterById(
    @Args('updateMarriageRegisterInput')
    updateMarriageRegisterInput: UpdateMarriageRegisterInput,
  ) {
    return this.marriageRegisterService.deleteMarriageRegisterById(
      updateMarriageRegisterInput,
    );
  }
}
