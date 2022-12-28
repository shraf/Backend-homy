import { Router } from 'express';
import {
  getUserCartsController,
  addProductsToUserCartsController,
  deleteProductFromUserCartsController,

} from '../controllers/index.js';
import { verifyTokenAndAuthorization, verifyToken } from '../middleware/index.js';
import { getUserCartControloler } from '../controllers/carts/getUserCartsController.js';
import updateProductQuantityController from '../controllers/carts/updateProductQuantityController.js';

const router = Router();
router.route('/cart')
  .post(verifyToken, addProductsToUserCartsController)
  .get(verifyToken, getUserCartControloler)

router.route('/cart/:id')
  .patch(verifyToken, updateProductQuantityController)
  .delete(verifyToken, deleteProductFromUserCartsController)
/* router.route('/user/:id/cart').get(verifyTokenAndAuthorization, getUserCartsController)
.post(verifyTokenAndAuthorization, addProductsToUserCartsController); */
router.delete('/user/:id/cart/:productId', verifyTokenAndAuthorization, deleteProductFromUserCartsController);

export default router;
