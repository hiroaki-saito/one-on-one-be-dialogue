import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesController } from './dialogues/dialogues.controller';
import { HeroModule } from './dialogues/dialogues.module';

@Module({
  imports: [HeroModule],
  controllers: [AppController, HeroesController],
  providers: [AppService],
})
export class AppModule {}
