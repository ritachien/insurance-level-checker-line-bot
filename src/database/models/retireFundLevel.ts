import { Table, Column, Model, AllowNull, CreatedAt, PrimaryKey, BelongsTo, ForeignKey } from 'sequelize-typescript'
import { HealthLevel } from './healthLevel'

@Table({
  tableName: 'retireFundLevels',
  timestamps: false
})

export class RetireFundLevel extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column
  level!: number

  @ForeignKey(() => HealthLevel)
  healthInsuranceLevel!: number

  @AllowNull(false)
  @Column
  funds!: number
}
