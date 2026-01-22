import app from './src/app.js';
import 'dotenv/config';
import express from 'express';
const PORT =  5000;
app.use(express.json());
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT} , database port : ${process.env.DB_PORT}`)
);

app.get('/', (req, res) => {
    res.send('AMS running!');
});
