import express from 'express';
import { addStudent, deleteStudent, getAllStudents, getStudentByClass } from '../controllers/students.controller.js';

const studentRouter = express.Router();

studentRouter.post("/add", addStudent);
studentRouter.get("/", getAllStudents);
studentRouter.get("/class/:className", getStudentByClass);
studentRouter.delete("/:id", deleteStudent);


export default studentRouter;