import { Module } from '@nestjs/common';
import { WaterReconnectService } from './water_reconnect.service';
import { WaterReconnectResolver } from './water_reconnect.resolver';

@Module({
  providers: [WaterReconnectResolver, WaterReconnectService]
})
export class WaterReconnectModule {}
