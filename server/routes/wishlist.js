import { Router } from 'express';
import {
  addProductsToUserWishlistsController,
  getUserWishlistsController,
  deleteProductFromUserWishlistsController,
} from '../controllers/index.js';
import { verifyTokenAndAuthorization } from '../middleware/index.js';

const router = Router();
router.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Max-Age', '1800');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH, OPTIONS');
});
router.route('/user/:id/wishlist').get(verifyTokenAndAuthorization, getUserWishlistsController)
  .post(verifyTokenAndAuthorization, addProductsToUserWishlistsController);
router.delete('/user/:id/wishlist/:productId', verifyTokenAndAuthorization, deleteProductFromUserWishlistsController);

export default router;
