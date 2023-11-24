import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseEntity } from '../../common/crud/base.entity';
import { RoiReportController } from './controllers/roi-report.controller';
import { RoiReportEntity } from './entities/roi-report.entity';
import { RoiReportService } from './services/roi-report.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RoiReportEntity
    ])
  ],
  controllers: [
    RoiReportController,
  ],
  providers: [RoiReportService],
})
export class RoiReportModule {}
