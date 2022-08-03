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
  addUserAddressController,
  deleteUserAddressController,
  updateUserAddressController,
  updateAddressDefaultController,
  getSuperDealsController,
} from '../controllers/index.js';
import { verifyTokenAndAuthorization } from '../middleware/index.js';

const router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/categories', getCategoriesController);
router.get('/subCategories/:categoryId', getSubCategoriesController);
router.get('/product/super', getSuperDealsController);
router.get('/product/:productId', getProductByIdController);
router.get('/product/:productId/review', getSingleProductReviewController);
router.get('/product/:productId/rate', getCollectReviewProductController);
router.get('/product/super', getSuperDealsController);
router.put('/user/:id/update', verifyTokenAndAuthorization, updateInfoUserController);
router.get('/user/:id/address', verifyTokenAndAuthorization, getAddressesUserController);
router.post('/user/:id/address', verifyTokenAndAuthorization, addUserAddressController);
router.delete('/user/:id/address', verifyTokenAndAuthorization, deleteUserAddressController);
router.put('/user/:id/address', verifyTokenAndAuthorization, updateUserAddressController);
router.put('/user/:id/address/default', verifyTokenAndAuthorization, updateAddressDefaultController);

export default router;
