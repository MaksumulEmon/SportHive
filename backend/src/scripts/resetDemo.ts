import dotenv from 'dotenv';
import connectDB from '../config/db';
import User from '../models/User';

dotenv.config();

async function resetDemo() {
  try {
    await connectDB();

    // Delete old demo user
    await User.deleteMany({ email: 'demo@sportshive.com' });
    console.log('Old demo user deleted');

    // Create new demo user
    await User.create({
      name: 'Emon User',
      email: 'emon@sportshive.com',
      password: 'emon123',
      role: 'admin',
    });
    console.log('New demo user created');
    console.log('Email: emon@sportshive.com');
    console.log('Password: emon123');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

resetDemo();