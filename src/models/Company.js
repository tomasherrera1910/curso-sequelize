import { DataTypes } from "sequelize"
import { sequelize } from "../database/connect.js"
import { Employee } from "./Employee.js"
export const Company = sequelize.define(
  "Company",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
)

Company.hasMany(Employee, {
  foreignKey: "companyId",
  sourceKey: "id",
})

Employee.belongsTo(Company, {
  foreignKey: "companyId",
  targetKey: "id",
})

// await Company.sync()
// await Employee.sync()
