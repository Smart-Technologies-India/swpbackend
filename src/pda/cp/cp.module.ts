import { Module } from '@nestjs/common';
import { CpService } from './cp.service';
import { CpResolver } from './cp.resolver';

@Module({
  providers: [CpResolver, CpService]
})
export class CpModule {}
