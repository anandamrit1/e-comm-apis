import express from 'express';
import { createProduct, getProducts, getProduct, updateProduct, deleteProduct } from '../controllers/productcontroller.js';
import authMiddleware from '../middleware/authmiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createProduct);
router.get('/', getProducts);
router.get('/:id', getProduct);
router.put('/:id', authMiddleware, updateProduct);
router.delete('/:id', authMiddleware, deleteProduct);

export default router;
