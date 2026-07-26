import { Router } from 'express';
import { protect } from '../middleware/auth';
import { adminOnly } from '../middleware/admin';
import { getAllUsers, deleteUser, getAllEvents, getStats } from '../controllers/adminController';

const router = Router();

router.use(protect);
router.use(adminOnly);

router.get('/users', getAllUsers);
router.delete('/users/:id', deleteUser);
router.get('/events', getAllEvents);
router.get('/stats', getStats);

export default router;