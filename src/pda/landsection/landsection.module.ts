import { Module } from '@nestjs/common';
import { LandsectionService } from './landsection.service';
import { LandsectionResolver } from './landsection.resolver';
import { DealinghandService } from 'src/dealinghand/dealinghand.service';
import { DealinghandModule } from 'src/dealinghand/dealinghand.module';

@Module({
  imports: [DealinghandModule],
  providers: [LandsectionResolver, LandsectionService],
})
export class LandsectionModule {}
