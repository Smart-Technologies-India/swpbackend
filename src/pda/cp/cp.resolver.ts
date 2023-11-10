import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CpService } from './cp.service';
import { Cp } from './entities/cp.entity';
import { CreateCpInput } from './dto/create-cp.input';
import { UpdateCpInput } from './dto/update-cp.input';

@Resolver(() => Cp)
export class CpResolver {
  constructor(private readonly cpService: CpService) {}

  @Query(() => [Cp])
  getAllCp() {
    return this.cpService.getAllCp();
  }

  @Query(() => Cp)
  getCpById(@Args('id', { type: () => Int }) id: number) {
    return this.cpService.getCpById(id);
  }

  @Mutation(() => Cp)
  createCp(@Args('createCpInput') createCpInput: CreateCpInput) {
    return this.cpService.createCp(createCpInput);
  }

  @Mutation(() => Cp)
  updateCpById(@Args('updateCpInput') updateCpInput: UpdateCpInput) {
    return this.cpService.updateCpById(updateCpInput);
  }

  @Mutation(() => Cp)
  deleteCpById(@Args('updateCpInput') updateCpInput: UpdateCpInput) {
    return this.cpService.deleteCpById(updateCpInput);
  }
}
