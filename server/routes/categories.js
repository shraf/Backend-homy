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
  getAllSubCategoriesController,
  addSubCategoryController,
  updateSubCategoryController,
  deleteSubCategoryController,
  archivedSubCategoryController,
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

router.get('/dashboard/sub-categories', verifyTokenAndAdminAuthorization, getAllSubCategoriesController);
router.post('/dashboard/sub-category', verifyTokenAndAdminAuthorization, addSubCategoryController);
router.route('/dashboard/sub-category/:id')
  .put(verifyTokenAndAdminAuthorization, updateSubCategoryController)
  .delete(verifyTokenAndAdminAuthorization, deleteSubCategoryController);
router.put('/dashboard/sub-category/:id/archive', verifyTokenAndAdminAuthorization, archivedSubCategoryController);

export default router;
