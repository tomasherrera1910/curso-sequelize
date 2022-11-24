import { DataTypes } from "sequelize"
import { sequelize } from "../../database/connect.js"

export const Course = sequelize.define(
  "Course",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    teacher: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
)
