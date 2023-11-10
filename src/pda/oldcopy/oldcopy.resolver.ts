import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OldcopyService } from './oldcopy.service';
import { Oldcopy } from './entities/oldcopy.entity';
import { CreateOldcopyInput } from './dto/create-oldcopy.input';
import { UpdateOldcopyInput } from './dto/update-oldcopy.input';

@Resolver(() => Oldcopy)
export class OldcopyResolver {
  constructor(private readonly oldcopyService: OldcopyService) {}

  @Query(() => [Oldcopy])
  getAllOldCopy() {
    return this.oldcopyService.getAllOldCopy();
  }

  @Query(() => Oldcopy)
  getOldCopyById(@Args('id', { type: () => Int }) id: number) {
    return this.oldcopyService.getOldCopyById(id);
  }

  @Mutation(() => Oldcopy)
  createOldCopy(
    @Args('createOldcopyInput') createOldcopyInput: CreateOldcopyInput,
  ) {
    return this.oldcopyService.createOldCopy(createOldcopyInput);
  }

  @Mutation(() => Oldcopy)
  updateOldCopyById(
    @Args('updateOldcopyInput') updateOldcopyInput: UpdateOldcopyInput,
  ) {
    return this.oldcopyService.updateOldCopyById(updateOldcopyInput);
  }

  @Mutation(() => Oldcopy)
  deleteOldCopyById(
    @Args('updateOldcopyInput') updateOldcopyInput: UpdateOldcopyInput,
  ) {
    return this.oldcopyService.deleteOldCopyById(updateOldcopyInput);
  }
}
