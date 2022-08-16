import { Router } from 'express';
import {
  getCategoriesController,
  getSubCategoriesController,
  getSuperDealsController,
  getBrandsController,
  getProductsByNameController,
  getTopSellerProductsController,
  getCategoryByIdController,
} from '../controllers/index.js';

const router = Router();
router.get('/categories', getCategoriesController);
router.get('/categories/:categoryId', getCategoryByIdController);
router.get('/subCategories/:categoryId', getSubCategoriesController);
router.get('/product/super', getSuperDealsController);
router.get('/brands', getBrandsController);
router.get('/search', getProductsByNameController);
router.get('/top-seller', getTopSellerProductsController);

export default router;
