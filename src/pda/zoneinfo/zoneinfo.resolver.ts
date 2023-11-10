import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ZoneinfoService } from './zoneinfo.service';
import { Zoneinfo } from './entities/zoneinfo.entity';
import { CreateZoneinfoInput } from './dto/create-zoneinfo.input';
import { UpdateZoneinfoInput } from './dto/update-zoneinfo.input';

@Resolver(() => Zoneinfo)
export class ZoneinfoResolver {
  constructor(private readonly zoneinfoService: ZoneinfoService) {}

  @Query(() => [Zoneinfo])
  getAllZone() {
    return this.zoneinfoService.getAllZone();
  }

  @Query(() => Zoneinfo)
  getAllZoneById(@Args('id', { type: () => Int }) id: number) {
    return this.zoneinfoService.getAllZoneById(id);
  }

  @Mutation(() => Zoneinfo)
  createZone(
    @Args('createZoneinfoInput') createZoneinfoInput: CreateZoneinfoInput,
  ) {
    return this.zoneinfoService.createZone(createZoneinfoInput);
  }

  @Mutation(() => Zoneinfo)
  updateZoneById(
    @Args('updateZoneinfoInput') updateZoneinfoInput: UpdateZoneinfoInput,
  ) {
    return this.zoneinfoService.updateZoneById(updateZoneinfoInput);
  }

  @Mutation(() => Zoneinfo)
  deleteZoneById(
    @Args('updateZoneinfoInput') updateZoneinfoInput: UpdateZoneinfoInput,
  ) {
    return this.zoneinfoService.deleteZoneById(updateZoneinfoInput);
  }
}
