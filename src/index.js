import express from "express"
import { sequelize } from "./database/connect.js"
import companiesRouter from "./controllers/companies.js"
import employeesRouter from "./controllers/employees.js"
import studentsCoursesRouter from "./controllers/studentsCourses.js"
const app = express()
app.use(express.json())

try {
  await sequelize.authenticate()
  console.log("Db connected")
} catch (error) {
  console.error(error)
}
app.get("/", (req, res) => {
  res.json({ message: "todo ok" })
})
app.use(companiesRouter)
app.use(employeesRouter)
app.use(studentsCoursesRouter)
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server on in port ${PORT}`)
})
