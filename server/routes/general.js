import { Router } from 'express';
import {
  getSuperDealsController,
  getProductsByNameController,
  getTopSellerProductsController,
  getPermissionsByRoleIdController,
} from '../controllers/index.js';

const router = Router();

router.get('/product/super', getSuperDealsController);
router.get('/search', getProductsByNameController);
router.get('/top-seller', getTopSellerProductsController);
router.get('/permission-role', getPermissionsByRoleIdController);

export default router;
