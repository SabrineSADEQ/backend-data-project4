import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URL || '', {
     
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

