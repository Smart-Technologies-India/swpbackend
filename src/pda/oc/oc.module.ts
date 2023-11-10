import { Module } from '@nestjs/common';
import { OcService } from './oc.service';
import { OcResolver } from './oc.resolver';

@Module({
  providers: [OcResolver, OcService]
})
export class OcModule {}
