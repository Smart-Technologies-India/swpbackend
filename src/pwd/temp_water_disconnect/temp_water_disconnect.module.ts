import { Module } from '@nestjs/common';
import { TempWaterDisconnectService } from './temp_water_disconnect.service';
import { TempWaterDisconnectResolver } from './temp_water_disconnect.resolver';

@Module({
  providers: [TempWaterDisconnectResolver, TempWaterDisconnectService]
})
export class TempWaterDisconnectModule {}
