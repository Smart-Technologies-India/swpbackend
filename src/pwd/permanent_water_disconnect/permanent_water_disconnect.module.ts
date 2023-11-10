import { Module } from '@nestjs/common';
import { PermanentWaterDisconnectService } from './permanent_water_disconnect.service';
import { PermanentWaterDisconnectResolver } from './permanent_water_disconnect.resolver';

@Module({
  providers: [PermanentWaterDisconnectResolver, PermanentWaterDisconnectService]
})
export class PermanentWaterDisconnectModule {}
