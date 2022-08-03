import { getCategoriesQuery, getSubCategoriesQuery } from './categories/index.js';
import {
  getProductByIdQuery,
  getSingleProductReviewByIdQuery,
  getCollectReviewForProductQuery,
  getSuperDealsQuery,
  addReviewProductQuery,
} from './products/index.js';
import {
  addNewUserQuery,
  checkEmailExistsQuery,
  updateInfoUserQuery,
  getUserAddressesQuery,
  addUserAddressQuery,
  deleteUserAddressQuery,
  updateUserAddressQuery,
  updateAddressDefaultQuery,
} from './users/index.js';

export {
  getCategoriesQuery,
  getSubCategoriesQuery,
  getProductByIdQuery,
  getSingleProductReviewByIdQuery,
  getCollectReviewForProductQuery,
  addNewUserQuery,
  checkEmailExistsQuery,
  updateInfoUserQuery,
  getUserAddressesQuery,
  addUserAddressQuery,
  deleteUserAddressQuery,
  updateUserAddressQuery,
  updateAddressDefaultQuery,
  getSuperDealsQuery,
  addReviewProductQuery,
};