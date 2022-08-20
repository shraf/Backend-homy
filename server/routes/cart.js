import { Router } from 'express';
import {
  getUserCartsController,
  addProductsToUserCartsController,
  deleteProductFromUserCartsController,

} from '../controllers/index.js';
import { verifyTokenAndAuthorization } from '../middleware/index.js';

const router = Router();

router.route('/user/:id/cart').get(verifyTokenAndAuthorization, getUserCartsController)
  .post(verifyTokenAndAuthorization, addProductsToUserCartsController);
router.delete('/user/:id/cart/:productId', verifyTokenAndAuthorization, deleteProductFromUserCartsController);

export default router;
