import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoiReportDto } from '../dto/roi-report.dto';
import { RoiReportService } from '../services/roi-report.service';

@Controller('api/v1/roi-report')
export class RoiReportController {

  constructor(
    private readonly roiReportService: RoiReportService
  ) {}

  @Post()
  public async save(@Body() body: RoiReportDto): Promise<RoiReportDto> {
      return this.roiReportService.save(body)
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.roiReportService.findById(id);
  }
}
