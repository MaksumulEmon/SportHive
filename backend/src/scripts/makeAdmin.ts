import dotenv from 'dotenv';
import connectDB from '../config/db';
import User from '../models/User';

dotenv.config();

async function makeAdmin(email: string) {
  try {
    await connectDB();

    const user = await User.findOne({ email });
    if (!user) {
      console.log(`User with email ${email} not found`);
      process.exit(1);
    }

    user.role = 'admin';
    await user.save();

    console.log(`User ${email} is now an admin`);
    process.exit(0);
  } catch (error) {
    console.error('Error making user admin:', error);
    process.exit(1);
  }
}

// Get email from command line
const email = process.argv[2];
if (!email) {
  console.log('Usage: ts-node src/scripts/makeAdmin.ts <email>');
  process.exit(1);
}

makeAdmin(email);