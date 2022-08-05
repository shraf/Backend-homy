import { compare, hash } from 'bcrypt';
import { checkEmailExistsQuery, updateUserPasswordQuery } from '../../database/queries/index.js';
import { passwordSchema, customizedError } from '../../utils/index.js';

const updateUserPasswordController = async (req, res, next) => {
  try {
    const { email } = req.user;
    const { oldPassword, newPassword } = await passwordSchema.validate(
      req.body,
      { abortEarly: false },
    );
    const { rowCount, rows: data } = await checkEmailExistsQuery(email);
    if (rowCount === 0) {
      throw customizedError(400, 'There have error with email');
    }
    const resultComapre = await compare(oldPassword, data[0].password);
    if (!resultComapre) {
      throw customizedError(400, 'There have error with password');
    }
    if (oldPassword === newPassword) {
      throw customizedError(400, 'New password is same with old password');
    }
    const hashedPassword = await hash(newPassword, 10);
    const { rows: updated } = await updateUserPasswordQuery(hashedPassword, email);
    res.json({ message: 'update password successfully', status: 200, data: updated[0] });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default updateUserPasswordController;
