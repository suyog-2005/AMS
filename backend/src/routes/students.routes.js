import express from 'express';
import { addStudent, deleteStudent, getAllStudents, getStudentByClass } from '../controllers/students.controller.js';

const router = express.Router();

router.post("/add", addStudent);
router.get("/", getAllStudents);
router.get("/class/:className", getStudentByClass);
router.delete("/:id", deleteStudent);

export default router;