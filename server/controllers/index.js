import { clientError, serverError } from './error/index.js';
import {
  getCategoriesController,
  getSubCategoriesController,
  getCategoryByIdController,
  addCategoryController,
  deleteCategoryController,
  updateCategoryController,
  archivedCategoryController,
  getAllCategoriesController,
  addSubCategoryController,
  deleteSubCategoryController,
  updateSubCategoryController,
  archivedSubCategoryController,
  getAllSubCategoriesController,
} from './categories/index.js';

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
  getUsersAndEmployeesController,
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
  addProductController,
  updateProductController,
  deleteProductController,
  getAllProductsController,
  archivedProductController,
} from './products/index.js';

import signup from './signup/index.js';
import signin from './signin/index.js';

import {
  getUserOrdersController,
  getSingleUserOrderController,
  getSingleOrderController,
  addOrderController,
  updateOrderController,
  getAllOrdersController,
} from './orders/index.js';

import {
  getBrandsController,
  addBrandController,
  updateBrandController,
} from './brands/index.js';

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

import {
  getBannersController,
  addBannerController,
  getAllBannersController,
  updateBannerController,
} from './banners/index.js';

import {
  addEmployeeController,
  getEmployeesController,
  getRolesController,
  getPagesController,
  getPermissionsController,
  addRolesController,
  getPermissionsByRoleIdController,
  updateRoleForEmployeeController,
} from './admin/index.js';

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
  getCategoryByIdController,
  addEmployeeController,
  getEmployeesController,
  getRolesController,
  addCategoryController,
  deleteCategoryController,
  getPagesController,
  getPermissionsController,
  addRolesController,
  getPermissionsByRoleIdController,
  getUsersAndEmployeesController,
  getBannersController,
  addBannerController,
  getAllBannersController,
  updateBannerController,
  addBrandController,
  updateBrandController,
  updateCategoryController,
  archivedCategoryController,
  getAllCategoriesController,
  addSubCategoryController,
  deleteSubCategoryController,
  updateSubCategoryController,
  archivedSubCategoryController,
  getAllSubCategoriesController,
  addProductController,
  updateProductController,
  deleteProductController,
  getAllProductsController,
  archivedProductController,
  updateOrderController,
  getAllOrdersController,
  updateRoleForEmployeeController,
};
