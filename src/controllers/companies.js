import { Router } from "express"
import { Company } from "../models/Company.js"
import { Employee } from "../models/Employee.js"
const companiesRouter = Router()

companiesRouter.get("/companies", async (req, res) => {
  try {
    const companies = await Company.findAll()
    res.json(companies)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
companiesRouter.get("/companies/:id", async (req, res) => {
  try {
    const { id } = req.params
    const company = await Company.findByPk(id)
    res.json(company)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
companiesRouter.get("/companies/:id/employees", async (req, res) => {
  try {
    const { id } = req.params
    const company = await Company.findOne({
      where: { id },
      include: {
        model: Employee,
        attributes: ["firstName", "lastName"],
      },
    })
    res.json(company)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
companiesRouter.post("/companies", async (req, res) => {
  try {
    const { name, description } = req.body
    const newCompany = await Company.create({
      name,
      description,
    })
    res.status(201).json(newCompany)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
companiesRouter.put("/companies/:id", async (req, res) => {
  try {
    const { id } = req.params
    const company = await Company.findByPk(id)
    company.set(req.body)
    await company.save()
    res.status(202).json(company)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
companiesRouter.delete("/companies/:id", async (req, res) => {
  try {
    const { id } = req.params
    await Company.destroy({
      where: { id },
    })
    res.status(204).end()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
export default companiesRouter
