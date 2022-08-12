import jwt from 'jsonwebtoken';
import {
  checkEmailExistsQuery,
  updateUserResetQuery,
} from '../../database/queries/index.js';
import { customizedError, emailSchema, sendEmail } from '../../utils/index.js';

const forgetPasswordController = async (req, res, next) => {
  try {
    const { email } = await emailSchema.validate(req.body, { abortEarly: false });
    const { rows } = await checkEmailExistsQuery(email);
    if (rows.length === 0) {
      throw customizedError(400, 'Invalid email');
    } else {
      const resetLink = jwt.sign({ user: rows[0].email }, process.env.SECRET_KEY);
      await updateUserResetQuery(resetLink, rows[0].id);
      sendEmail(rows[0].email, resetLink);
      res.json({ status: 200, message: 'Check your email' });
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default forgetPasswordController;
