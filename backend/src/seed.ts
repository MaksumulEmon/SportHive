import dotenv from 'dotenv';
import connectDB from './config/db';
import User from './models/User';

dotenv.config();

const demoUser = {
  name: 'Emon User',
  email: 'emon@sportshive.com',
  password: 'emon123',
  role: 'user' as const,
};

async function seed() {
  try {
    await connectDB();

    // Check if demo user exists
    const existingUser = await User.findOne({ email: demoUser.email });
    if (existingUser) {
      console.log('Demo user already exists');
      process.exit(0);
    }

    // Create demo user
    await User.create(demoUser);
    console.log('Demo user created successfully');
    console.log('Email: demo@sportshive.com');
    console.log('Password: demo123');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding demo user:', error);
    process.exit(1);
  }
}

seed();