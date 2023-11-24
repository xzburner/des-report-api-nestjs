import { Module } from '@nestjs/common';
import { RoiReportModule } from './modules/roi-report/roi-report.module';

@Module({
  imports: [
    RoiReportModule,
  ],
  controllers: [

  ],
  providers: [

  ],
})
export class AppModule {}
