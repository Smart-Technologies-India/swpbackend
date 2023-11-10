import { Module } from '@nestjs/common';
import { TempWaterConnectService } from './temp_water_connect.service';
import { TempWaterConnectResolver } from './temp_water_connect.resolver';

@Module({
  providers: [TempWaterConnectResolver, TempWaterConnectService]
})
export class TempWaterConnectModule {}
