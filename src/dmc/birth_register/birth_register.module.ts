import { Module } from '@nestjs/common';
import { BirthRegisterService } from './birth_register.service';
import { BirthRegisterResolver } from './birth_register.resolver';

@Module({
  providers: [BirthRegisterResolver, BirthRegisterService]
})
export class BirthRegisterModule {}
