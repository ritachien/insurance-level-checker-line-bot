import { Table, Column, Model, AllowNull, PrimaryKey, HasMany } from 'sequelize-typescript'
import { HealthLevel } from './HealthLevel'

@Table({
  tableName: 'retireFundLevels',
  timestamps: false
})

export class RetireFundLevel extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column
  level!: number

  @AllowNull(false)
  @Column
  funds!: number

  @HasMany(() => HealthLevel)
  healthLevel!: HealthLevel[]
}
