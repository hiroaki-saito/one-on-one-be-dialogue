import { Test, TestingModule } from '@nestjs/testing';
import { DialoguesController } from './dialogues.controller';

describe('DialoguesController', () => {
  let controller: DialoguesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DialoguesController],
    }).compile();

    controller = module.get<DialoguesController>(DialoguesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
