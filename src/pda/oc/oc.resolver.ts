import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OcService } from './oc.service';
import { Oc } from './entities/oc.entity';
import { CreateOcInput } from './dto/create-oc.input';
import { UpdateOcInput } from './dto/update-oc.input';

@Resolver(() => Oc)
export class OcResolver {
  constructor(private readonly ocService: OcService) {}

  
  @Query(() => [Oc])
  getAllOc() {
    return this.ocService.getAllOc();
  }

  @Query(() => Oc)
  getOcById(@Args('id', { type: () => Int }) id: number) {
    return this.ocService.getOcById(id);
  }

  @Mutation(() => Oc)
  createOc(
    @Args('createOcInput') createOcInput: CreateOcInput,
  ) {
    return this.ocService.createOc(createOcInput);
  }

  @Mutation(() => Oc)
  updateOcById(
    @Args('updateOcInput') updateOcInput: UpdateOcInput,
  ) {
    return this.ocService.updateOcById(updateOcInput);
  }

  @Mutation(() => Oc)
  deleteOcById(
    @Args('updateOcInput') updateOcInput: UpdateOcInput,
  ) {
    return this.ocService.deleteOcById(updateOcInput);
  }
}
