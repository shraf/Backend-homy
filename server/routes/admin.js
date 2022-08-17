import { Router } from 'express';
import {
  addCategoryController,
  addEmployeeController,
  deleteCategoryController,
  getEmployeesController,
  getPagesController,
  getPermissionsController,
  getRolesController,
} from '../controllers/index.js';
import { verifyTokenAndAdminAuthorization } from '../middleware/index.js';

const router = Router();
router.get('/roles', verifyTokenAndAdminAuthorization, getRolesController);
router.get('/employees', verifyTokenAndAdminAuthorization, getEmployeesController);
router.post('/employee', verifyTokenAndAdminAuthorization, addEmployeeController);
router.post('/category', addCategoryController);
router.delete('/category/:categoryId', deleteCategoryController);
router.get('/pages', verifyTokenAndAdminAuthorization, getPagesController);
router.get('/permissions', verifyTokenAndAdminAuthorization, getPermissionsController);

export default router;
