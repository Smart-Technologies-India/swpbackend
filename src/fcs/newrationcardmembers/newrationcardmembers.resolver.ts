import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NewrationcardmembersService } from './newrationcardmembers.service';
import { Newrationcardmember } from './entities/newrationcardmember.entity';
import { CreateNewrationcardmemberInput } from './dto/create-newrationcardmember.input';
import { UpdateNewrationcardmemberInput } from './dto/update-newrationcardmember.input';
import { CreateMultipalNewrationcardmemberInput } from './dto/create-multipal-newrationcardmember.input';

@Resolver(() => Newrationcardmember)
export class NewrationcardmembersResolver {
  constructor(
    private readonly newrationcardmembersService: NewrationcardmembersService,
  ) {}

  @Query(() => [Newrationcardmember])
  getAllNewRationMember() {
    return this.newrationcardmembersService.getAllNewRationMember();
  }

  @Query(() => Newrationcardmember)
  getRattionMemberById(@Args('id', { type: () => Int }) id: number) {
    return this.newrationcardmembersService.getRattionMemberById(id);
  }

  @Mutation(() => Newrationcardmember)
  createRationMember(
    @Args('createNewrationcardmemberInput')
    createNewrationcardmemberInput: CreateNewrationcardmemberInput,
  ) {
    return this.newrationcardmembersService.createRationMember(
      createNewrationcardmemberInput,
    );
  }

  @Mutation(() => [Newrationcardmember])
  createMultipalRationMember(
    @Args('createMultipalNewrationcardmemberInput')
    createMultipalNewrationcardmemberInput: CreateMultipalNewrationcardmemberInput,
  ) {
    return this.newrationcardmembersService.createMultipalRationMember(
      createMultipalNewrationcardmemberInput,
    );
  }

  @Mutation(() => Newrationcardmember)
  updateRationMemberById(
    @Args('updateNewrationcardmemberInput')
    updateNewrationcardmemberInput: UpdateNewrationcardmemberInput,
  ) {
    return this.newrationcardmembersService.updateRationMemberById(
      updateNewrationcardmemberInput,
    );
  }

  @Mutation(() => Newrationcardmember)
  deleteRationNumberById(
    @Args('updateNewrationcardmemberInput')
    updateNewrationcardmemberInput: UpdateNewrationcardmemberInput,
  ) {
    return this.newrationcardmembersService.deleteRationNumberById(
      updateNewrationcardmemberInput,
    );
  }

  // ----------------------------------------------------------
}
