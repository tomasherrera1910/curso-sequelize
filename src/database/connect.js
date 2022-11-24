import { Sequelize } from "sequelize"

export const sequelize = new Sequelize("curso-sequelize", "root", "", {
  dialect: "mysql",
  port: 3306,
})
