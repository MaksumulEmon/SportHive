import { Request, Response } from 'express';
import Purchase from '../models/Purchase';
import Event from '../models/Event';

// Extend Request to include user
interface AuthRequest extends Request {
  user?: {
    id: string;
  };
}

// Purchase/register for an event
export const purchaseEvent = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { eventId } = req.body;
    const userId = req.user?.id;

    // Check event exists
    const event = await Event.findById(eventId);
    if (!event) {
      res.status(404).json({ success: false, message: 'Event not found' });
      return;
    }

    // Check if user is the event owner
    if (event.userId.toString() === userId) {
      res.status(400).json({ success: false, message: 'You cannot purchase your own event' });
      return;
    }

    // Check if already purchased
    const existingPurchase = await Purchase.findOne({ userId, eventId });
    if (existingPurchase) {
      res.status(400).json({ success: false, message: 'You have already registered for this event' });
      return;
    }

    // Check max participants
    const purchaseCount = await Purchase.countDocuments({ eventId, status: 'confirmed' });
    if (purchaseCount >= event.maxParticipants) {
      res.status(400).json({ success: false, message: 'Event is full' });
      return;
    }

    const purchase = await Purchase.create({
      userId,
      eventId,
      amount: event.fee,
      status: 'confirmed',
    });

    res.status(201).json({ success: true, data: purchase });
  } catch (error) {
    console.error('Purchase error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get user's purchases
export const getUserPurchases = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const purchases = await Purchase.find({ userId: req.user?.id })
      .populate('eventId')
      .sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: purchases });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Check if user has purchased an event
export const checkPurchase = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { eventId } = req.params;
    const purchase = await Purchase.findOne({ userId: req.user?.id, eventId });
    res.status(200).json({
      success: true,
      data: { purchased: !!purchase, purchase },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Cancel a purchase
export const cancelPurchase = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const purchase = await Purchase.findOne({
      _id: req.params.id,
      userId: req.user?.id,
    });
    if (!purchase) {
      res.status(404).json({ success: false, message: 'Purchase not found' });
      return;
    }
    purchase.status = 'cancelled';
    await purchase.save();
    res.status(200).json({ success: true, data: purchase });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};