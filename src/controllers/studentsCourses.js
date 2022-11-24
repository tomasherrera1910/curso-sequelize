import { Router } from "express"
import { Course } from "../models/ManyToMany/Course.js"
import { Student } from "../models/ManyToMany/Student.js"
import "../models/ManyToMany/StudentCourses.js"
const studentsCoursesRouter = Router()

studentsCoursesRouter.get("/students/courses", async (req, res) => {
  try {
    const student = await Student.findAll({
      include: {
        model: Course,
      },
    })
    res.json(student)
  } catch (error) {
    console.error(error)
    console.error(error.name)
    res.status(500).json({ error: error.message })
  }
})

studentsCoursesRouter.get("/courses/students", async (req, res) => {
  try {
    const courses = await Course.findAll({
      include: {
        model: Student,
      },
    })
    res.json(courses)
  } catch (error) {
    console.error(error)
    console.error(error.name)
    res.status(500).json({ error: error.message })
  }
})
export default studentsCoursesRouter
