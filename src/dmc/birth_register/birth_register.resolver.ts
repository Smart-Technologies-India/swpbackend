import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BirthRegisterService } from './birth_register.service';
import { BirthRegister } from './entities/birth_register.entity';
import { CreateBirthRegisterInput } from './dto/create-birth_register.input';
import { UpdateBirthRegisterInput } from './dto/update-birth_register.input';

@Resolver(() => BirthRegister)
export class BirthRegisterResolver {
  constructor(private readonly birthRegisterService: BirthRegisterService) {}
  @Query(() => [BirthRegister])
  getAllBirthRegister() {
    return this.birthRegisterService.getAllBirthRegister();
  }

  @Query(() => BirthRegister)
  getBirthRegisterById(@Args('id', { type: () => Int }) id: number) {
    return this.birthRegisterService.getBirthRegisterById(id);
  }

  @Mutation(() => BirthRegister)
  createBirthRegister(
    @Args('createBirthRegisterInput')
    createBirthRegisterInput: CreateBirthRegisterInput,
  ) {
    return this.birthRegisterService.createBirthRegister(
      createBirthRegisterInput,
    );
  }

  @Mutation(() => BirthRegister)
  updateBirthRegisterById(
    @Args('updateBirthRegisterInput')
    updateBirthRegisterInput: UpdateBirthRegisterInput,
  ) {
    return this.birthRegisterService.updateBirthRegisterById(
      updateBirthRegisterInput,
    );
  }

  @Mutation(() => BirthRegister)
  deleteBirthRegisterById(
    @Args('updateBirthRegisterInput')
    updateBirthRegisterInput: UpdateBirthRegisterInput,
  ) {
    return this.birthRegisterService.deleteBirthRegisterById(
      updateBirthRegisterInput,
    );
  }
}
