import { Module } from '@nestjs/common';
import { DialoguesService } from './dialogues.service';

@Module({
  providers: [DialoguesService],
})
export class DialoguesModule {}
