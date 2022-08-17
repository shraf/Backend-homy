import {
  getCategoriesQuery,
  getSubCategoriesQuery,
  getCategoryByIdQuery,
  addCategoryQuery,
  updateCategoryQuery,
  deleteCategoryQuery,
  archivedCategoryQuery,
  addSubCategoryQuery,
  updateSubCategoryQuery,
  deleteSubCategoryQuery,
  archivedSubCategoryQuery,
} from './categories/index.js';

import {
  getProductByIdQuery,
  getSingleProductReviewByIdQuery,
  getCollectReviewForProductQuery,
  getSuperDealsQuery,
  addReviewProductQuery,
  getProductsQuery,
  getRecommendedProductQuery,
  deleteProductQuery,
  archivedProductQuery,
  addProductQuery,
  updateProductQuery,
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

import {
  getBrandsQuery,
  addBrandsQuery,
  deleteBrandsQuery,
  updateBrandsQuery,
  archivedBrandsQuery,
} from './brands/index.js';

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

import {
  getBanarasQuery,
  addBanarasQuery,
  updateBanarasQuery,
} from './banaras/index.js';

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
  getBanarasQuery,
  getCategoryByIdQuery,
  addBrandsQuery,
  deleteBrandsQuery,
  updateBrandsQuery,
  archivedBrandsQuery,
  addBanarasQuery,
  updateBanarasQuery,
  addCategoryQuery,
  updateCategoryQuery,
  deleteCategoryQuery,
  archivedCategoryQuery,
  addSubCategoryQuery,
  updateSubCategoryQuery,
  deleteSubCategoryQuery,
  archivedSubCategoryQuery,
  deleteProductQuery,
  archivedProductQuery,
  addProductQuery,
  updateProductQuery,
};
