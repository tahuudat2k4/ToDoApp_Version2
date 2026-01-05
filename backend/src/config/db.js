import mongoose from 'mongoose';
import chalk from 'chalk';

const connectDB = async () => {
    const MONGO_URI = process.env.MONGO_URL_CLOUD;

    try {
        const cn = await mongoose.connect(MONGO_URI);
        console.log(chalk.black.bgGreen(`👽 Connected successfully to MongoDB: ${mongoose.connection.host} !`));
    } catch (error) {
        console.log(chalk.white.bgRed(`Error connecting to MongoDB: ${error.message}`));
    }
}

export default connectDB;