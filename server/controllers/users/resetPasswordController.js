import jwt from 'jsonwebtoken';
import { hash } from 'bcrypt';
import { checkUserByResetLinkQuery, updateUserResetPasswordQuery } from '../../database/queries/index.js';
import { customizedError, resetPasswordSchema } from '../../utils/index.js';

const resetPasswordController = async (req, res, next) => {
  const { token } = req.params;
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (error, decodedToken) => {
      if (error) {
        res.status(400).json({ message: 'Incorrect token or expired' });
      }
    });
  }
  try {
    // find user by the temporary token we stored earlier
    const { newPassword } = await resetPasswordSchema.validate(req.body, { abortEarly: false });
    const { rows } = await checkUserByResetLinkQuery(token);
    if (rows.length === 0) {
      throw customizedError(400, 'We could not find a match for this link');
    }
    const hashPassword = await hash(newPassword, 10);
    await updateUserResetPasswordQuery(hashPassword, rows[0].id);
    res.json({ status: 200, message: 'Password updated' });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default resetPasswordController;
