import { Module } from '@nestjs/common';
import { BirthCertificateService } from './birth_certificate.service';
import { BirthCertificateResolver } from './birth_certificate.resolver';

@Module({
  providers: [BirthCertificateResolver, BirthCertificateService]
})
export class BirthCertificateModule {}
