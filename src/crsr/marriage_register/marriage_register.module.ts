import { Module } from '@nestjs/common';
import { MarriageRegisterService } from './marriage_register.service';
import { MarriageRegisterResolver } from './marriage_register.resolver';

@Module({
  providers: [MarriageRegisterResolver, MarriageRegisterService]
})
export class MarriageRegisterModule {}
