import { Router } from "express"
import { Employee } from "../models/Employee.js"
const employeesRouter = Router()

employeesRouter.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.findAll()
    res.json(employees)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

employeesRouter.get("/employees/:id", async (req, res) => {
  try {
    const { id } = req.params
    const employee = await Employee.findByPk(id)
    res.json(employee)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

employeesRouter.post("/employees", async (req, res) => {
  try {
    const { firstName, lastName, role, companyId } = req.body
    const newEmployee = await Employee.create({
      firstName,
      lastName,
      role,
      companyId,
    })
    res.status(201).json(newEmployee)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

employeesRouter.put("/employees/:id", async (req, res) => {
  try {
    const { id } = req.params
    const employee = await Employee.findByPk(id)
    employee.set(req.body)
    await employee.save()
    res.status(202).json(employee)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

employeesRouter.delete("/employees/:id", async (req, res) => {
  try {
    const { id } = req.params
    await Employee.destroy({
      where: { id },
    })
    res.status(204).end()
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})
export default employeesRouter
