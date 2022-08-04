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
  addReviewProductController,
} from '../controllers/index.js';
import { verifyToken, verifyTokenAndAuthorization } from '../middleware/index.js';

const router = Router();
router.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Max-Age', '1800');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH, OPTIONS');
});
router.post('/signup', signup);
router.post('/signin', signin);
router.get('/categories', getCategoriesController);
router.get('/subCategories/:categoryId', getSubCategoriesController);
router.get('/product/super', getSuperDealsController);
router.get('/product/:productId', getProductByIdController);
router.route('/product/:productId/review').get(getSingleProductReviewController)
  .post(verifyToken, addReviewProductController);
router.get('/product/:productId/rate', getCollectReviewProductController);
router.put('/user/:id/update', verifyTokenAndAuthorization, updateInfoUserController);
router.route('/user/:id/address').get(verifyTokenAndAuthorization, getAddressesUserController)
  .post(verifyTokenAndAuthorization, addUserAddressController)
  .delete(verifyTokenAndAuthorization, deleteUserAddressController)
  .put(verifyTokenAndAuthorization, updateUserAddressController);
router.put('/user/:id/address/default', verifyTokenAndAuthorization, updateAddressDefaultController);

export default router;
