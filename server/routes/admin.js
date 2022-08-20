import { Router } from 'express';
import {
  addEmployeeController,
  addRolesController,
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
router.get('/pages', verifyTokenAndAdminAuthorization, getPagesController);
router.get('/permissions', verifyTokenAndAdminAuthorization, getPermissionsController);
router.get('/users-employees', verifyTokenAndAdminAuthorization, getUsersAndEmployeesController);

export default router;
