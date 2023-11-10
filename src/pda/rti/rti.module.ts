import { Module } from '@nestjs/common';
import { RtiService } from './rti.service';
import { RtiResolver } from './rti.resolver';

@Module({
  providers: [RtiResolver, RtiService]
})
export class RtiModule {}
