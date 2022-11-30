import { Table, Column, Model, AllowNull, CreatedAt, PrimaryKey, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript'
import { HealthLevel } from './healthLevel'

@Table({
  tableName: 'laborLevels',
  timestamps: false
})

export class LaborLevel extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column
  level!: number

  @AllowNull(false)
  @Column
  cost!: number

  @ForeignKey(() => HealthLevel)
  healthInsuranceLevel!: number
}
