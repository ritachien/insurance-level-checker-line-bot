import { Table, Column, Model, AllowNull, PrimaryKey, BelongsTo, ForeignKey } from 'sequelize-typescript'
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

  @ForeignKey(() => LaborLevel)
  laborLevel!: number

  @ForeignKey(() => RetireFundLevel)
  retireFundLevel!: number

  @BelongsTo(() => LaborLevel)
  LaborLevel!: LaborLevel

  @BelongsTo(() => RetireFundLevel)
  RetireFundLevel!: RetireFundLevel
}
