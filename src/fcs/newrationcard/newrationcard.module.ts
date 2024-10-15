import { Module } from '@nestjs/common';
import { NewrationcardService } from './newrationcard.service';
import { NewrationcardResolver } from './newrationcard.resolver';

@Module({
  providers: [NewrationcardResolver, NewrationcardService]
})
export class NewrationcardModule {}
