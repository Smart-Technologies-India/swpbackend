import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LandsectionService } from './landsection.service';
import { Landsection } from './entities/landsection.entity';
import { CreateLandsectionInput } from './dto/create-landsection.input';
import { UpdateLandsectionInput } from './dto/update-landsection.input';
import { OutsideLandsectionInput } from './dto/outside-landsection.input';
import { Common } from 'src/common/entities/common.entity';
import { SendFileLandsectionInput } from './dto/sendfile-landsection.input';

@Resolver(() => Landsection)
export class LandsectionResolver {
  constructor(private readonly landsectionService: LandsectionService) {}

  @Query(() => [Landsection])
  getAllLand() {
    return this.landsectionService.getAllLand();
  }

  @Query(() => Landsection)
  getAllLandById(@Args('id', { type: () => Int }) id: number) {
    return this.landsectionService.getAllLandById(id);
  }

  @Mutation(() => Landsection)
  createLand(
    @Args('createLandsectionInput')
    createLandsectionInput: CreateLandsectionInput,
  ) {
    return this.landsectionService.createLand(createLandsectionInput);
  }

  @Mutation(() => Landsection)
  updateLandById(
    @Args('updateLandsectionInput')
    updateLandsectionInput: UpdateLandsectionInput,
  ) {
    return this.landsectionService.updateLandById(updateLandsectionInput);
  }

  @Mutation(() => Landsection)
  deleteLandById(
    @Args('updateLandsectionInput')
    updateLandsectionInput: UpdateLandsectionInput,
  ) {
    return this.landsectionService.deleteLandById(updateLandsectionInput);
  }

  @Mutation(() => Common)
  getFromOutside(
    @Args('outsideLandsectionInput')
    outsideLandsectionInput: OutsideLandsectionInput,
  ) {
    return this.landsectionService.getFromOutside(outsideLandsectionInput);
  }

  @Query(() => Boolean)
  sendFileOutside(
    @Args('sendFileLandsectionInput')
    sendFileLandsectionInput: SendFileLandsectionInput,
  ) {
    return this.landsectionService.sendFileOutside(sendFileLandsectionInput);
  }

  @Query(() => Boolean)
  sendFileOutsideillegal(
    @Args('sendFileLandsectionInput')
    sendFileLandsectionInput: SendFileLandsectionInput,
  ) {
    return this.landsectionService.sendFileOutsideillegal(sendFileLandsectionInput);
  }
}
