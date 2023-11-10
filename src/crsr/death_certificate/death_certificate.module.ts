import { Module } from '@nestjs/common';
import { DeathCertificateService } from './death_certificate.service';
import { DeathCertificateResolver } from './death_certificate.resolver';

@Module({
  providers: [DeathCertificateResolver, DeathCertificateService]
})
export class DeathCertificateModule {}
