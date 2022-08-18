import { Router } from 'express';
import {
  addCategoryController,
  addEmployeeController,
  addRolesController,
  deleteCategoryController,
  getEmployeesController,
  getPagesController,
  getPermissionsController,
  getRolesController,
  getUsersAndEmployeesController,
} from '../controllers/index.js';
import { verifyTokenAndAdminAuthorization } from '../middleware/index.js';

const router = Router();
router.route('/roles')
  .get(verifyTokenAndAdminAuthorization, getRolesController)
  .post(verifyTokenAndAdminAuthorization, addRolesController);
router.get('/employees', verifyTokenAndAdminAuthorization, getEmployeesController);
router.post('/employee', verifyTokenAndAdminAuthorization, addEmployeeController);
router.post('/category', verifyTokenAndAdminAuthorization, addCategoryController);
router.delete('/category/:categoryId', verifyTokenAndAdminAuthorization, deleteCategoryController);
router.get('/pages', verifyTokenAndAdminAuthorization, getPagesController);
router.get('/permissions', verifyTokenAndAdminAuthorization, getPermissionsController);
router.get('/users-employees', verifyTokenAndAdminAuthorization, getUsersAndEmployeesController);

export default router;
