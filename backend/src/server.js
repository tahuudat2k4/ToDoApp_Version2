import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(chalk.black.bgMagenta(`🚀 Server is running on port ${PORT} !`));
    });
});

