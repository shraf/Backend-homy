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
import { verifyToken, verifyTokenAndAuthorization } from '../middleware/index.js';
import getUserData from '../controllers/users/getUserData.js';

const router = Router();

router.get('/me',verifyToken, getUserData)
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
