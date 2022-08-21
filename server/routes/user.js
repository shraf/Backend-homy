import { Router } from 'express';
import {
  signup,
  signin,
  updateInfoUserController,
  getAddressesUserController,
  addUserAddressController,
  deleteUserAddressController,
  updateUserAddressController,
  updateAddressDefaultController,
  updateUserPasswordController,
  forgetPasswordController,
  resetPasswordController,
} from '../controllers/index.js';
import { verifyTokenAndAuthorization } from '../middleware/index.js';

const router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.put('/user/:id/change-password', verifyTokenAndAuthorization, updateUserPasswordController);
router.put('/user/:id/update', verifyTokenAndAuthorization, updateInfoUserController);
router.route('/user/:id/address')
  .get(verifyTokenAndAuthorization, getAddressesUserController)
  .post(verifyTokenAndAuthorization, addUserAddressController)
  .put(verifyTokenAndAuthorization, updateUserAddressController);
router.delete('/user/:id/address/:addressId', verifyTokenAndAuthorization, deleteUserAddressController);
router.put('/user/:id/address/default', verifyTokenAndAuthorization, updateAddressDefaultController);
router.patch('/forget-password', forgetPasswordController);
router.patch('/reset-password/:token', resetPasswordController);

export default router;
