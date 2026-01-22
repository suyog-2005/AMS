import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import studentRouter from './routes/students.routes.js';

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use('/students', studentRouter);

export default app;
