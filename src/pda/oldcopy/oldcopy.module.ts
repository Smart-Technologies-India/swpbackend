import { Module } from '@nestjs/common';
import { OldcopyService } from './oldcopy.service';
import { OldcopyResolver } from './oldcopy.resolver';

@Module({
  providers: [OldcopyResolver, OldcopyService]
})
export class OldcopyModule {}
