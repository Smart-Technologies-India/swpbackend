import { Module } from '@nestjs/common';
import { DealinghandService } from './dealinghand.service';
import { DealinghandResolver } from './dealinghand.resolver';

@Module({
  providers: [DealinghandResolver, DealinghandService],
  exports: [DealinghandService],
})
export class DealinghandModule {}
