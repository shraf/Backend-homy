import { Router } from 'express';
import {
  getCategoriesController,
  getSubCategoriesController,
  getProductByIdController,
  getSingleProductReviewController,
  getCollectReviewProductController,
  signup,
  signin,
  updateInfoUserController,
  getAddressesUserController,
} from '../controllers/index.js';
import { verifyTokenAndAuthorization } from '../middleware/index.js';

const router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/categories', getCategoriesController);
router.get('/subCategories/:categoryId', getSubCategoriesController);
router.get('/product/:productId', getProductByIdController);
router.get('/product/:productId/review', getSingleProductReviewController);
router.get('/product/:productId/rate', getCollectReviewProductController);
router.put('/user/:id/update', verifyTokenAndAuthorization, updateInfoUserController);
router.get('/user/:id/address', verifyTokenAndAuthorization, getAddressesUserController);

export default router;
