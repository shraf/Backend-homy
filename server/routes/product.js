import { Router } from 'express';
import {
  getProductByIdController,
  getSingleProductReviewController,
  getCollectReviewProductController,
  addReviewProductController,
  getRecommendedProductController,
  getProductsFilteredController,
} from '../controllers/index.js';
import { verifyToken } from '../middleware/index.js';

const router = Router();

router.get('/product/:productId', getProductByIdController);
router.route('/product/:productId/review').get(getSingleProductReviewController)
  .post(verifyToken, addReviewProductController);
router.get('/product/:productId/rate', getCollectReviewProductController);
router.post('/products', getProductsFilteredController);
router.get('/products/:categoriesId/recommended', getRecommendedProductController);

export default router;
