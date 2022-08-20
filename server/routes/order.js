import { Router } from 'express';
import {
  getUserOrdersController,
  getSingleUserOrderController,
  getSingleOrderController,
  addOrderController,
} from '../controllers/index.js';
import { verifyToken, verifyTokenAndAuthorization } from '../middleware/index.js';

const router = Router();

router.get('/user/:id/orders', verifyTokenAndAuthorization, getUserOrdersController);
router.get('/single-order/:orderNumber', verifyToken, getSingleUserOrderController);
router.post('/single-order', getSingleOrderController);
router.post('/order', addOrderController);

export default router;
