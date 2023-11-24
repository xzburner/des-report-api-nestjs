import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoiReportDto } from '../dto/roi-report.dto';
import { RoiReportEntity } from '../entities/roi-report.entity';

@Injectable()
export class RoiReportService {

  constructor(
    @InjectRepository(RoiReportEntity)
    private readonly roiReportRepository: Repository<RoiReportEntity>
  ) {}

  public async save(data: RoiReportDto): Promise<RoiReportEntity> {
    return this.roiReportRepository.save(this.roiReportRepository.create(data));
  }

  async findById(id: string): Promise<RoiReportDto> {
    const entidade = await this.roiReportRepository.findOne({ where: { id } });

    if (!entidade) {
      throw new NotFoundException(`Entidade com ID ${id} não encontrada.`);
    }

    return entidade;
  }
}
