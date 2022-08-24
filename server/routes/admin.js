import { Router } from 'express';
import {
  addEmployeeController,
  addRolesController,
  getEmployeesController,
  getOrderByMonthsController,
  getOrderStatusController,
  getPagesController,
  getPermissionsController,
  getRolesController,
  getStatisticsController,
  getTopSellerProductsController,
  getUsersAndEmployeesController,
  updateRoleForEmployeeController,
} from '../controllers/index.js';
import { verifyToken, verifyTokenAndAdminAuthorization } from '../middleware/index.js';

const router = Router();

router.route('/roles')
  .get(verifyTokenAndAdminAuthorization, getRolesController)
  .post(verifyTokenAndAdminAuthorization, addRolesController);
router.get('/employees', verifyTokenAndAdminAuthorization, getEmployeesController);
router.post('/employee', verifyTokenAndAdminAuthorization, addEmployeeController);
router.get('/pages', verifyTokenAndAdminAuthorization, getPagesController);
router.get('/permissions', verifyTokenAndAdminAuthorization, getPermissionsController);
router.get('/users-employees', verifyTokenAndAdminAuthorization, getUsersAndEmployeesController);
router.put('/dashboard/employee/:id/update-role', verifyTokenAndAdminAuthorization, updateRoleForEmployeeController);
router.get('/dashboard/order-status', verifyToken, getOrderStatusController);
router.get('/dashboard/top-products', verifyToken, getTopSellerProductsController);
router.get('/dashboard/statistics', verifyToken, getStatisticsController);
router.get('/dashboard/order-month', verifyToken, getOrderByMonthsController);

export default router;
