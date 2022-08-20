import { Router } from 'express';
import {
  getCategoriesController,
  getSubCategoriesController,
  getCategoryByIdController,
  addCategoryController,
  deleteCategoryController,
  updateCategoryController,
  archivedCategoryController,
  getAllCategoriesController,
} from '../controllers/index.js';
import { verifyTokenAndAdminAuthorization } from '../middleware/index.js';

const router = Router();

router.get('/categories', getCategoriesController);
router.get('/categories/:categoryId', getCategoryByIdController);
router.get('/subCategories/:categoryId', getSubCategoriesController);
router.get('/dashboard/categories', verifyTokenAndAdminAuthorization, getAllCategoriesController);
router.post('/dashboard/category', verifyTokenAndAdminAuthorization, addCategoryController);
router.route('/dashboard/category/:id')
  .put(verifyTokenAndAdminAuthorization, updateCategoryController)
  .delete(verifyTokenAndAdminAuthorization, deleteCategoryController);
router.put('/dashboard/category/:id/archive', verifyTokenAndAdminAuthorization, archivedCategoryController);

export default router;
