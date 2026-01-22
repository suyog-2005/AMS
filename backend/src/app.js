import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import studentRouter from './routes/students.routes.js';
import attendanceRouter from './routes/attendance.routes.js';

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use('/students', studentRouter);
    app.use('/attendance', attendanceRouter);
export default app;
