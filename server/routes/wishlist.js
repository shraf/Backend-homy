import { Router } from 'express';
import {
  addProductsToUserWishlistsController,
  getUserWishlistsController,
  deleteProductFromUserWishlistsController,
} from '../controllers/index.js';
import { verifyTokenAndAuthorization } from '../middleware/index.js';

const router = Router();

router.route('/user/:id/wishlist').get(verifyTokenAndAuthorization, getUserWishlistsController)
  .post(verifyTokenAndAuthorization, addProductsToUserWishlistsController);
router.delete('/user/:id/wishlist/:productId', verifyTokenAndAuthorization, deleteProductFromUserWishlistsController);

export default router;
