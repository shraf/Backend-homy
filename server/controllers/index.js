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
} from './users/index.js';
import {
  getProductByIdController,
  getSingleProductReviewController,
  getCollectReviewProductController,
  getSuperDealsController,
  addReviewProductController,
} from './products/index.js';
import signup from './signup/index.js';
import signin from './signin/index.js';
import {
  getUserOrdersController,
  getSingleUserOrderController,
  getSingleOrderController,
  addOrderController,
} from './orders/index.js';

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
};
