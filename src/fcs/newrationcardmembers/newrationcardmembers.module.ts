import { Module } from '@nestjs/common';
import { NewrationcardmembersService } from './newrationcardmembers.service';
import { NewrationcardmembersResolver } from './newrationcardmembers.resolver';

@Module({
  providers: [NewrationcardmembersResolver, NewrationcardmembersService]
})
export class NewrationcardmembersModule {}
