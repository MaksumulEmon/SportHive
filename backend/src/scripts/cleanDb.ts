import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI as string;

async function clean(): Promise<void> {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(uri);
    console.log("Connected successfully!");

    const db = mongoose.connection.db;
    if (!db) {
      throw new Error("Database instance not found");
    }

    // Collections to drop
    const toDrop = ['user', 'session', 'account'];

    // Get current collections
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);
    console.log("Current collections:", collectionNames);

    for (const name of toDrop) {
      if (collectionNames.includes(name)) {
        console.log(`Dropping unused collection: '${name}'...`);
        await db.collection(name).drop();
        console.log(`Collection '${name}' dropped successfully!`);
      } else {
        console.log(`Collection '${name}' does not exist.`);
      }
    }

    console.log("Database cleanup completed!");
  } catch (err) {
    console.error("Error during cleanup:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected.");
  }
}

clean();
