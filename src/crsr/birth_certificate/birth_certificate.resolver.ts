import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BirthCertificateService } from './birth_certificate.service';
import { BirthCertificate } from './entities/birth_certificate.entity';
import { CreateBirthCertificateInput } from './dto/create-birth_certificate.input';
import { UpdateBirthCertificateInput } from './dto/update-birth_certificate.input';

@Resolver(() => BirthCertificate)
export class BirthCertificateResolver {
  constructor(private readonly birthCertificateService: BirthCertificateService) {}

  @Query(() => [BirthCertificate])
  getAllBirthCertificate() {
    return this.birthCertificateService.getAllBirthCertificate();
  }

  @Query(() => BirthCertificate)
  getBirthCertificateById(@Args('id', { type: () => Int }) id: number) {
    return this.birthCertificateService.getBirthCertificateById(id);
  }

  @Mutation(() => BirthCertificate)
  createBirthCertificate(
    @Args('createBirthCertificateInput')
    createBirthCertificateInput: CreateBirthCertificateInput,
  ) {
    return this.birthCertificateService.createBirthCertificate(
      createBirthCertificateInput,
    );
  }

  @Mutation(() => BirthCertificate)
  updateBirthCertificateById(
    @Args('updateBirthCertificateInput')
    updateBirthCertificateInput: UpdateBirthCertificateInput,
  ) {
    return this.birthCertificateService.updateBirthCertificateById(
      updateBirthCertificateInput,
    );
  }

  @Mutation(() => BirthCertificate)
  deleteBirthCertificateById(
    @Args('updateBirthCertificateInput')
    updateBirthCertificateInput: UpdateBirthCertificateInput,
  ) {
    return this.birthCertificateService.deleteBirthCertificateById(
      updateBirthCertificateInput,
    );
  }
}
