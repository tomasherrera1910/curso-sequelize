import { DataTypes } from "sequelize"
import { sequelize } from "../../database/connect.js"

export const Student = sequelize.define(
  "Student",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    legajo: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
)
