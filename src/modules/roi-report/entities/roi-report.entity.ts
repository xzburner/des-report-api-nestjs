import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../common/crud/base.entity';

@Entity('roi-report')
export class RoiReportEntity extends BaseEntity {

  @Column()
  name: string;

  @Column()
  description: string;

}
