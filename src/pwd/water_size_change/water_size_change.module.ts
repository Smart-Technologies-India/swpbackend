import { Module } from '@nestjs/common';
import { WaterSizeChangeService } from './water_size_change.service';
import { WaterSizeChangeResolver } from './water_size_change.resolver';

@Module({
  providers: [WaterSizeChangeResolver, WaterSizeChangeService]
})
export class WaterSizeChangeModule {}
