import { Module } from '@nestjs/common';
import { BirthTeorService } from './birth_teor.service';
import { BirthTeorResolver } from './birth_teor.resolver';

@Module({
  providers: [BirthTeorResolver, BirthTeorService]
})
export class BirthTeorModule {}
