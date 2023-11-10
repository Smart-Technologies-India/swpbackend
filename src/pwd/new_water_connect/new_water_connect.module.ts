import { Module } from '@nestjs/common';
import { NewWaterConnectService } from './new_water_connect.service';
import { NewWaterConnectResolver } from './new_water_connect.resolver';

@Module({
  providers: [NewWaterConnectResolver, NewWaterConnectService]
})
export class NewWaterConnectModule {}
