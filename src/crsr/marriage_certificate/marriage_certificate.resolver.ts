import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MarriageCertificateService } from './marriage_certificate.service';
import { MarriageCertificate } from './entities/marriage_certificate.entity';
import { CreateMarriageCertificateInput } from './dto/create-marriage_certificate.input';
import { UpdateMarriageCertificateInput } from './dto/update-marriage_certificate.input';

@Resolver(() => MarriageCertificate)
export class MarriageCertificateResolver {
  constructor(private readonly marriageCertificateService: MarriageCertificateService) {}

  
  @Query(() => [MarriageCertificate])
  getAllMarriageCertificate() {
    return this.marriageCertificateService.getAllMarriageCertificate();
  }

  @Query(() => MarriageCertificate)
  getMarriageCertificateById(@Args('id', { type: () => Int }) id: number) {
    return this.marriageCertificateService.getMarriageCertificateById(id);
  }

  @Mutation(() => MarriageCertificate)
  createMarriageCertificate(
    @Args('createMarriageCertificateInput')
    createMarriageCertificateInput: CreateMarriageCertificateInput,
  ) {
    return this.marriageCertificateService.createMarriageCertificate(
      createMarriageCertificateInput,
    );
  }

  @Mutation(() => MarriageCertificate)
  updateMarriageCertificateById(
    @Args('updateMarriageCertificateInput')
    updateMarriageCertificateInput: UpdateMarriageCertificateInput,
  ) {
    return this.marriageCertificateService.updateMarriageCertificateById(
      updateMarriageCertificateInput,
    );
  }

  @Mutation(() => MarriageCertificate)
  deleteMarriageCertificateById(
    @Args('updateMarriageCertificateInput')
    updateMarriageCertificateInput: UpdateMarriageCertificateInput,
  ) {
    return this.marriageCertificateService.deleteMarriageCertificateById(
      updateMarriageCertificateInput,
    );
  }
}
