import { Table, Column, Model, AllowNull, CreatedAt, PrimaryKey, HasOne, ForeignKey } from 'sequelize-typescript'
import { LaborLevel } from './laborLevel'
import { RetireFundLevel } from './retireFundLevel'

@Table({
  tableName: 'healthLevels',
  timestamps: false
})

export class HealthLevel extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column
  level!: number

  @AllowNull(false)
  @Column
  cost!: number

  @HasOne(() => LaborLevel)
  laborLevel!: LaborLevel

  @HasOne(() => RetireFundLevel)
  retireFundLevel!: RetireFundLevel
}
