import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoiReportController } from './controllers/roi-report.controller';
import { RoiReportEntity } from './entities/roi-report.entity';
import { RoiReportService } from './services/roi-report.service';

@Module({
  imports: [],
  controllers: [
    RoiReportController,
  ],
  providers: [RoiReportService],
})
export class RoiReportModule {}
