//#region Imports

import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

//#endregion

export class BaseEntity {

  //#regions columns

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updated_at: Date;

  //#endregion

}
