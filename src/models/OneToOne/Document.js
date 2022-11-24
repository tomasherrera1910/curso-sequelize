import { DataTypes } from "sequelize"
import { sequelize } from "../../database/connect.js"

export const Document = sequelize.define(
  "Document",
  {
    number: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: "card",
    },
  },
  {
    timestamps: false,
  }
)
