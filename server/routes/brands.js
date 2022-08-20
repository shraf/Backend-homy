import { Router } from 'express';
import {
  addBrandController,
  getBrandsController, updateBrandController,
} from '../controllers/index.js';
import { verifyTokenAndAdminAuthorization } from '../middleware/index.js';

const router = Router();

router.get('/brands', getBrandsController);
router.get('/dashboard/brands', verifyTokenAndAdminAuthorization, getBrandsController);
router.post('/dashboard/brand', verifyTokenAndAdminAuthorization, addBrandController);
router.put('/dashboard/brand/:id', verifyTokenAndAdminAuthorization, updateBrandController);

export default router;
