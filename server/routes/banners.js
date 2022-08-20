import { Router } from 'express';
import {
  addBannerController,
  getAllBannersController,
  getBannersController,
  updateBannerController,
} from '../controllers/index.js';
import { verifyTokenAndAdminAuthorization } from '../middleware/index.js';

const router = Router();

router.get('/banner', getBannersController);
router.get('/dashboard/banners', verifyTokenAndAdminAuthorization, getAllBannersController);
router.post('/dashboard/banner', verifyTokenAndAdminAuthorization, addBannerController);
router.put('/dashboard/banner/:id', verifyTokenAndAdminAuthorization, updateBannerController);

export default router;
