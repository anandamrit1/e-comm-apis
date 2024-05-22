import { Router } from 'express';
import { createOrder, getOrders, getOrder, deleteOrder } from '../controllers/ordercontroller.js';
import authMiddleware from '../middleware/authmiddleware.js';

const router = Router();

router.post('/', authMiddleware, createOrder);
router.get('/', authMiddleware, getOrders);
router.get('/:id', authMiddleware, getOrder);
router.delete('/:id', authMiddleware, deleteOrder);

export default router;
