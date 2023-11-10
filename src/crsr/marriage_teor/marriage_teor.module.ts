import { Module } from '@nestjs/common';
import { MarriageTeorService } from './marriage_teor.service';
import { MarriageTeorResolver } from './marriage_teor.resolver';

@Module({
  providers: [MarriageTeorResolver, MarriageTeorService]
})
export class MarriageTeorModule {}
