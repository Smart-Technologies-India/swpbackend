import { Module } from '@nestjs/common';
import { PetroleumService } from './petroleum.service';
import { PetroleumResolver } from './petroleum.resolver';

@Module({
  providers: [PetroleumResolver, PetroleumService]
})
export class PetroleumModule {}
