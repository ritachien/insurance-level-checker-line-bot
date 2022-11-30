import { Table, Column, Model, AllowNull, PrimaryKey, HasMany } from 'sequelize-typescript'
import { HealthLevel } from './healthLevel.model'

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

  @HasMany(() => HealthLevel)
  healthLevel!: HealthLevel
}
