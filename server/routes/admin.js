import { Router } from 'express';
import {
  addEmployeeController,
  addRolesController,
  deleteRoleController,
  deleteUserController,
  getOrderByMonthsController,
  getOrderStatusController,
  getPagesController,
  getPermissionsController,
  getRolesController,
  getStatisticsController,
  getTopSellerProductsController,
  getUsersAndEmployeesController,
  signInAdmin,
  updateRoleForEmployeeController,
} from '../controllers/index.js';
import { verifyToken, verifyTokenAndAdminAuthorization } from '../middleware/index.js';

const router = Router();

router.post('/dashboard/admin', signInAdmin);
router.route('/roles')
  .get(verifyTokenAndAdminAuthorization, getRolesController)
  .post(verifyTokenAndAdminAuthorization, addRolesController);
router.delete('/role/:id', verifyTokenAndAdminAuthorization, deleteRoleController);
router.post('/employee', verifyTokenAndAdminAuthorization, addEmployeeController);
router.get('/pages', verifyTokenAndAdminAuthorization, getPagesController);
router.get('/permissions', verifyTokenAndAdminAuthorization, getPermissionsController);
router.get('/users-employees', verifyTokenAndAdminAuthorization, getUsersAndEmployeesController);
router.put('/dashboard/employee/:id/update-role', verifyTokenAndAdminAuthorization, updateRoleForEmployeeController);
router.get('/dashboard/order-status', verifyToken, getOrderStatusController);
router.get('/dashboard/top-products', verifyToken, getTopSellerProductsController);
router.get('/dashboard/statistics', verifyToken, getStatisticsController);
router.get('/dashboard/order-month', verifyToken, getOrderByMonthsController);
router.delete('/dashboard/user/:id', verifyTokenAndAdminAuthorization, deleteUserController);

export default router;
