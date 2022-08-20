import { Router } from 'express';
import {
  getCategoriesController,
  getSubCategoriesController,
  getSuperDealsController,
  getProductsByNameController,
  getTopSellerProductsController,
  getCategoryByIdController,
  getPermissionsByRoleIdController,
} from '../controllers/index.js';

const router = Router();

router.get('/categories', getCategoriesController);
router.get('/categories/:categoryId', getCategoryByIdController);
router.get('/subCategories/:categoryId', getSubCategoriesController);
router.get('/product/super', getSuperDealsController);
router.get('/search', getProductsByNameController);
router.get('/top-seller', getTopSellerProductsController);
router.get('/permission-role', getPermissionsByRoleIdController);

export default router;
