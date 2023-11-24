import { Test, TestingModule } from '@nestjs/testing';
import { RoiReportController } from './roi-report.controller';

describe('ControllersController', () => {
  let controller: RoiReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoiReportController],
    }).compile();

    controller = module.get<RoiReportController>(RoiReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
