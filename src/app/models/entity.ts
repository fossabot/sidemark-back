// Module dependencies.
import { Entity, PrimaryColumn, Column, OneToOne } from 'typeorm'

// Entity Table Model.
@Entity('Entity')
export class Likemark {
  @PrimaryColumn('int')
  uuId: number

  @OneToOne(type => Likemark, {
    cascadeRemove: true
  })
  @Column({
    type: 'int',
    nullable: false
  })
  parentId: number

  @Column({
    type: 'varchar',
    nullable: false
  })
  name: string

  @Column({
    type: 'varchar',
    nullable: false
  })
  url: string
}

console.log('Likemark model is ready!')
