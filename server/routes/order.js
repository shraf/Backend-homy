import { Router } from 'express';
import {
  getUserOrdersController,
  getSingleUserOrderController,
  getSingleOrderController,
  addOrderController,
  getAllOrdersController,
  updateOrderController,
} from '../controllers/index.js';
import { verifyToken, verifyTokenAndAdminAuthorization, verifyTokenAndAuthorization } from '../middleware/index.js';

const router = Router();

router.get('/user/:id/orders', verifyTokenAndAuthorization, getUserOrdersController);
router.get('/single-order/:orderNumber', verifyToken, getSingleUserOrderController);
router.post('/single-order', getSingleOrderController);
router.post('/order', addOrderController);
router.get('/dashboard/orders', verifyTokenAndAdminAuthorization, getAllOrdersController);
router.route('/dashboard/order/:id/status')
  .put(verifyTokenAndAdminAuthorization, updateOrderController);

export default router;
