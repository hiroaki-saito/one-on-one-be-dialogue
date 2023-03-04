import { Module } from '@nestjs/common';
import { HeroService } from './dialogues.service';

@Module({
  providers: [HeroService],
})
export class HeroModule {}
