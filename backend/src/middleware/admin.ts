import { Response, NextFunction } from 'express';
import { AuthRequest } from './auth';
import User from '../models/User';

export const adminOnly = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await User.findById(req.user?.id);
    if (!user || user.role !== 'admin') {
      res.status(403).json({ success: false, message: 'Admin access required' });
      return;
    }
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};