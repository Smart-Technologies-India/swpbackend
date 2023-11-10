import { Module } from '@nestjs/common';
import { ZoneinfoService } from './zoneinfo.service';
import { ZoneinfoResolver } from './zoneinfo.resolver';

@Module({
  providers: [ZoneinfoResolver, ZoneinfoService]
})
export class ZoneinfoModule {}
