import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI as string;

async function check(): Promise<void> {
  try {
    console.log("Connecting to MongoDB Atlas...");
    await mongoose.connect(uri);
    console.log("Connected successfully!");

    const db = mongoose.connection.db;
    if (!db) {
      throw new Error("Database instance not found");
    }

    // Get collections
    const collections = await db.listCollections().toArray();
    console.log("Collections:", collections.map(c => c.name));

    // Get users count
    const usersCount = await db.collection('users').countDocuments();
    console.log("Total users:", usersCount);

    // Get events count
    const eventsCount = await db.collection('events').countDocuments();
    console.log("Total events:", eventsCount);

  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected.");
  }
}

check();
