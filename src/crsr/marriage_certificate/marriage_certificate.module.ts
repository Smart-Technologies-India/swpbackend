import { Module } from '@nestjs/common';
import { MarriageCertificateService } from './marriage_certificate.service';
import { MarriageCertificateResolver } from './marriage_certificate.resolver';

@Module({
  providers: [MarriageCertificateResolver, MarriageCertificateService]
})
export class MarriageCertificateModule {}
