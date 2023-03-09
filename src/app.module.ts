import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DialoguesController } from './dialogues/dialogues.controller';
import { DialoguesModule } from './dialogues/dialogues.module';

@Module({
  imports: [DialoguesModule],
  controllers: [AppController, DialoguesController],
  providers: [AppService],
})
export class AppModule {}
