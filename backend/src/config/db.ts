import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    // Disable Mongoose command buffering globally if the connection is down
    mongoose.set('bufferCommands', false);

    console.log('Connecting to MongoDB Atlas...');
    const conn = await mongoose.connect(process.env.MONGODB_URI as string, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of hanging for 30s
    });
    console.log(`MongoDB Connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
