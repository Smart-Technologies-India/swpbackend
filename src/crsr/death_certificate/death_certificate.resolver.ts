import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DeathCertificateService } from './death_certificate.service';
import { DeathCertificate } from './entities/death_certificate.entity';
import { CreateDeathCertificateInput } from './dto/create-death_certificate.input';
import { UpdateDeathCertificateInput } from './dto/update-death_certificate.input';

@Resolver(() => DeathCertificate)
export class DeathCertificateResolver {
  constructor(private readonly deathCertificateService: DeathCertificateService) {}

  @Query(() => [DeathCertificate])
  getAllDeathCertificate() {
    return this.deathCertificateService.getAllDeathCertificate();
  }

  @Query(() => DeathCertificate)
  getDeathCertificateById(@Args('id', { type: () => Int }) id: number) {
    return this.deathCertificateService.getDeathCertificateById(id);
  }

  @Mutation(() => DeathCertificate)
  createDeathCertificate(
    @Args('createDeathCertificateInput')
    createDeathCertificateInput: CreateDeathCertificateInput,
  ) {
    return this.deathCertificateService.createDeathCertificate(
      createDeathCertificateInput,
    );
  }

  @Mutation(() => DeathCertificate)
  updateDeathCertificateById(
    @Args('updateDeathCertificateInput')
    updateDeathCertificateInput: UpdateDeathCertificateInput,
  ) {
    return this.deathCertificateService.updateDeathCertificateById(
      updateDeathCertificateInput,
    );
  }

  @Mutation(() => DeathCertificate)
  deleteDeathCertificateById(
    @Args('updateDeathCertificateInput')
    updateDeathCertificateInput: UpdateDeathCertificateInput,
  ) {
    return this.deathCertificateService.deleteDeathCertificateById(
      updateDeathCertificateInput,
    );
  }
}
