import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoute from './routes/userRoute.js';
import taskRoute from './routes/taskRoute.js';

// configure env 
dotenv.config();
// initialize express app
const app = express();
const PORT = process.env.PORT;
// middleware
app.use(cors());
app.use(express.json());
// routes 
app.use('/api/users', userRoute);
app.use('/api/tasks', taskRoute);
// start server and connect to database
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(chalk.black.bgMagenta(`🚀 Server is running on port ${PORT} !`));
    });
});

