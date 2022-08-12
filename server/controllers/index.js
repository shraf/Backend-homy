import { clientError, serverError } from './error/index.js';
import { getCategoriesController, getSubCategoriesController } from './categories/index.js';
import {
  updateInfoUserController,
  getAddressesUserController,
  addUserAddressController,
  deleteUserAddressController,
  updateUserAddressController,
  updateAddressDefaultController,
  updateUserPasswordController,
  forgetPasswordController,
  resetPasswordController,
} from './users/index.js';
import {
  getProductByIdController,
  getSingleProductReviewController,
  getCollectReviewProductController,
  getSuperDealsController,
  addReviewProductController,
  getProductsByNameController,
  getTopSellerProductsController,
  getRecommendedProductController,
  getProductsFilteredController,
} from './products/index.js';
import signup from './signup/index.js';
import signin from './signin/index.js';
import {
  getUserOrdersController,
  getSingleUserOrderController,
  getSingleOrderController,
  addOrderController,
} from './orders/index.js';

import { getBrandsController } from './brands/index.js';

import {
  addProductsToUserCartsController,
  getUserCartsController,
  deleteProductFromUserCartsController,
} from './carts/index.js';

import {
  addProductsToUserWishlistsController,
  getUserWishlistsController,
  deleteProductFromUserWishlistsController,
} from './wishlists/index.js';

export {
  clientError,
  serverError,
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
  addProductsToUserCartsController,
  getUserCartsController,
  deleteProductFromUserCartsController,
  addProductsToUserWishlistsController,
  getUserWishlistsController,
  deleteProductFromUserWishlistsController,
  getRecommendedProductController,
  getProductsFilteredController,
  forgetPasswordController,
  resetPasswordController,
};
