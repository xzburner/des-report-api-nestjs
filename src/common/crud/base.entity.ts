//#region Imports

import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

//#endregion

export class BaseEntity {

  //#regions columns

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  //#endregion

}
