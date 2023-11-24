import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as process from 'process';
import { RoiReportModule } from './modules/roi-report/roi-report.module';

@Module({
  imports: [
    RoiReportModule,
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        synchronize: true,
        entities: [__dirname + '/**/*.entity{.js,.ts}']
      },
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
