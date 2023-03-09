import { Test, TestingModule } from '@nestjs/testing';
import { DialoguesService } from './dialogues.service';

describe('DialoguesService', () => {
  let service: DialoguesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DialoguesService],
    }).compile();

    service = module.get<DialoguesService>(DialoguesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
