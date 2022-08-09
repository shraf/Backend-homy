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
  updateUserPasswordController,
  getUserOrdersController,
  getSingleUserOrderController,
  getSingleOrderController,
  addOrderController,
  getBrandsController,
  getProductsByNameController,
  getTopSellerProductsController,
  getUserCartsController,
  addProductsToUserCartsController,
  deleteProductFromUserCartsController,
  addProductsToUserWishlistsController,
  getUserWishlistsController,
  deleteProductFromUserWishlistsController,
  getRecommendedProductController,
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
router.put('/user/:id/change-password', verifyTokenAndAuthorization, updateUserPasswordController);
router.put('/user/:id/update', verifyTokenAndAuthorization, updateInfoUserController);
router.route('/user/:id/address')
  .get(verifyTokenAndAuthorization, getAddressesUserController)
  .post(verifyTokenAndAuthorization, addUserAddressController)
  .put(verifyTokenAndAuthorization, updateUserAddressController);
router.delete('/user/:id/address/:addressId', verifyTokenAndAuthorization, deleteUserAddressController);
router.put('/user/:id/address/default', verifyTokenAndAuthorization, updateAddressDefaultController);
router.get('/user/:id/orders', verifyTokenAndAuthorization, getUserOrdersController);
router.get('/single-order/:orderNumber', verifyToken, getSingleUserOrderController);
router.post('/single-order', getSingleOrderController);
router.post('/order', addOrderController);
router.get('/brands', getBrandsController);
router.get('/search', getProductsByNameController);
router.get('/top-seller', getTopSellerProductsController);
router.route('/user/:id/cart').get(verifyTokenAndAuthorization, getUserCartsController)
  .post(verifyTokenAndAuthorization, addProductsToUserCartsController);
router.delete('/user/:id/cart/:productId', verifyTokenAndAuthorization, deleteProductFromUserCartsController);
router.route('/user/:id/wishlist').get(verifyTokenAndAuthorization, getUserWishlistsController)
  .post(verifyTokenAndAuthorization, addProductsToUserWishlistsController);
router.delete('/user/:id/wishlist/:productId', verifyTokenAndAuthorization, deleteProductFromUserWishlistsController);
router.get('/products/:categoriesId/recommended', getRecommendedProductController);
export default router;
