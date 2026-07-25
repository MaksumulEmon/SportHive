import { Router } from 'express';
import {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  getUserEvents,
} from '../controllers/eventController';
import { protect } from '../middleware/auth';

const router = Router();

router.get('/', getEvents);
router.get('/user/me', protect, getUserEvents);
router.get('/:id', getEvent);
router.post('/', protect, createEvent);
router.put('/:id', protect, updateEvent);
router.delete('/:id', protect, deleteEvent);

export default router;
