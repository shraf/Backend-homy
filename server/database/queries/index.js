import { getCategoriesQuery, getSubCategoriesQuery } from './categories/index.js';

import {
  getProductByIdQuery,
  getSingleProductReviewByIdQuery,
  getCollectReviewForProductQuery,
  getSuperDealsQuery,
  addReviewProductQuery,
  getProductsQuery,
  getRecommendedProductQuery,
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
  updateUserResetQuery,
  checkUserByResetLinkQuery,
  updateUserResetPasswordQuery,
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
  getProductsFromOrderQuery,
} from './orders/index.js';

import { getBrandsQuery } from './brands/index.js';

import {
  getUserCartsQuery,
  deleteProductFromUserCartsQuery,
  addProductToUserCartsQuery,
  updateProductQuantityQuery,
} from './carts/index.js';

import {
  getUserWishlistsQuery,
  deleteProductFromUserWishlistsQuery,
  addProductToUserWishlistsQuery,
} from './wishlists/index.js';

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
  getBrandsQuery,
  getProductsQuery,
  getProductsFromOrderQuery,
  getUserCartsQuery,
  deleteProductFromUserCartsQuery,
  addProductToUserCartsQuery,
  updateProductQuantityQuery,
  getUserWishlistsQuery,
  deleteProductFromUserWishlistsQuery,
  addProductToUserWishlistsQuery,
  getRecommendedProductQuery,
  updateUserResetQuery,
  checkUserByResetLinkQuery,
  updateUserResetPasswordQuery,
};
