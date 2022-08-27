import { compare } from 'bcrypt';
import dotenv from 'dotenv';
import { checkEmailExistsQuery } from '../../database/queries/index.js';
import { jwtSign, customizedError, signinSchema } from '../../utils/index.js';

dotenv.config();
const signIn = async (req, res, next) => {
  try {
    const { email, password } = await signinSchema.validate(req.body, {
      abortEarly: false,
    });
    const { rowCount, rows: data } = await checkEmailExistsQuery(email);
    if (rowCount === 0) {
      throw customizedError(400, 'There have error with email or password');
    }
    const resultCompare = await compare(password, data[0].password);
    if (!resultCompare) {
      throw customizedError(400, 'There have error with email or password');
    }
    const token = await jwtSign({
      id: data[0].id,
      email,
      name: data[0].name,
      phone: data[0].phone,
      role: data[0].role_id,
    });
    const userData = {
      id: data[0].id,
      email,
      name: data[0].name,
      phone: data[0].phone,
      role: data[0].role_id,
    };
    res.json({
      message: 'You have been successfully logged in',
      status: 200,
      data: userData,
      token,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default signIn;
