import { Router } from 'express';
import { protect } from '../middleware/auth';
import {
  purchaseEvent,
  getUserPurchases,
  checkPurchase,
  cancelPurchase,
} from '../controllers/purchaseController';

const router = Router();

router.post('/', protect, purchaseEvent);
router.get('/my', protect, getUserPurchases);
router.get('/check/:eventId', protect, checkPurchase);
router.delete('/:id', protect, cancelPurchase);

export default router;