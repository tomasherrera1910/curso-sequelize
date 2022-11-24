import { DataTypes } from "sequelize"
import { sequelize } from "../../database/connect.js"
import { Document } from "./Document.js"
export const Person = sequelize.define(
  "Person",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
)
Person.hasOne(Document, {
  foreignKey: "personId",
  sourceKey: "id",
})

Document.belongsTo(Person, {
  foreignKey: "personId",
  targetKey: "id",
})

// await Person.sync()
// await Document.sync()
