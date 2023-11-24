import { Test, TestingModule } from '@nestjs/testing';
import { RoiReportService } from './roi-report.service';

describe('ServicesService', () => {
  let service: RoiReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoiReportService],
    }).compile();

    service = module.get<RoiReportService>(RoiReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
