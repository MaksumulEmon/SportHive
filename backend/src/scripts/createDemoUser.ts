import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User';

dotenv.config();

const uri = process.env.MONGODB_URI as string;

async function run(): Promise<void> {
  try {
    console.log("Connecting to database...");
    await mongoose.connect(uri);
    console.log("Connected successfully!");

    const email = 'user@gmail.com';
    const password = '123456UUu';
    const name = 'Demo User';

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      console.log(`User ${email} already exists. Updating password...`);
      user.password = password; // Mongoose schema pre-save hook hashes this automatically
      user.name = name;
      await user.save();
      console.log(`User updated successfully!`);
    } else {
      console.log(`Creating new user ${email}...`);
      user = await User.create({
        name,
        email,
        password, // Mongoose schema pre-save hook hashes this automatically
        role: 'user'
      });
      console.log(`User created successfully!`);
    }

  } catch (err) {
    console.error("Error creating demo user:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected.");
  }
}

run();
