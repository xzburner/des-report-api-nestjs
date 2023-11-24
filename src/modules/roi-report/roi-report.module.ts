import { Module } from '@nestjs/common';
import { RoiReportController } from './controllers/roi-report.controller';
import { RoiReportService } from './services/roi-report.service';

@Module({
  controllers: [
    RoiReportController,
  ],
  providers: [RoiReportService],
})
export class RoiReportModule {}
