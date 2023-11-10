import { Module } from '@nestjs/common';
import { DeathTeorService } from './death_teor.service';
import { DeathTeorResolver } from './death_teor.resolver';

@Module({
  providers: [DeathTeorResolver, DeathTeorService]
})
export class DeathTeorModule {}
