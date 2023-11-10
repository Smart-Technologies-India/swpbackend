import { Module } from '@nestjs/common';
import { DeathRegiserService } from './death_regiser.service';
import { DeathRegiserResolver } from './death_regiser.resolver';

@Module({
  providers: [DeathRegiserResolver, DeathRegiserService]
})
export class DeathRegiserModule {}
