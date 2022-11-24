import { DataTypes } from "sequelize"
import { sequelize } from "../../database/connect.js"
import { Course } from "./Course.js"
import { Student } from "./Student.js"
export const StudentCourses = sequelize.define(
  "StudentCourses",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    timestamps: false,
  }
)
Student.belongsToMany(Course, {
  through: StudentCourses,
})

Course.belongsToMany(Student, {
  through: StudentCourses,
})

// await Student.sync()
// await Course.sync()
// await StudentCourses.sync()
