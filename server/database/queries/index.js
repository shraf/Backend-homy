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
  updateUserPasswordQuery,
} from './users/index.js';

import {
  checkGuestEmailExistsQuery,
  addGuestQuery,
} from './guests/index.js';

import {
  getUserOrdersQuery,
  getSingleOrderQuery,
  addGuestOrderQuery,
  addUserOrderQuery,
} from './orders/index.js';

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
  updateUserPasswordQuery,
  getUserOrdersQuery,
  checkGuestEmailExistsQuery,
  getSingleOrderQuery,
  addGuestQuery,
  addGuestOrderQuery,
  addUserOrderQuery,
};
