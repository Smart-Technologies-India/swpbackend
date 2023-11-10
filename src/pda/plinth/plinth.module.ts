import { Module } from '@nestjs/common';
import { PlinthService } from './plinth.service';
import { PlinthResolver } from './plinth.resolver';

@Module({
  providers: [PlinthResolver, PlinthService]
})
export class PlinthModule {}
