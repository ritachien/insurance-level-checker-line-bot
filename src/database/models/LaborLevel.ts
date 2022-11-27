import { Table, Column, Model, AllowNull, CreatedAt, PrimaryKey, AutoIncrement } from "sequelize-typescript"

@Table({
  tableName: "laborLevels"
})

export class LaborLevel extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column
  level!: number

  @AllowNull(false)
  @Column
  cost!: number

  @CreatedAt
  @Column
  createdAt!: Date
}
