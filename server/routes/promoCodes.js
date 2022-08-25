import { Router } from 'express';
import {
  getPromoCodesController,
  updatePromoCodeController,
  deletePromoCodeController,
  addPromoCodeController,
  checkPromoCodeExistsController,
} from '../controllers/index.js';
import { verifyTokenAndAdminAuthorization } from '../middleware/index.js';

const router = Router();

router.get('/dashboard/promo-codes', verifyTokenAndAdminAuthorization, getPromoCodesController);
router.post('/dashboard/promo-code', verifyTokenAndAdminAuthorization, addPromoCodeController);
router.route('/dashboard/promo-code/:id')
  .put(verifyTokenAndAdminAuthorization, updatePromoCodeController)
  .delete(verifyTokenAndAdminAuthorization, deletePromoCodeController);
router.get('/promo-code/:name', checkPromoCodeExistsController);

export default router;
