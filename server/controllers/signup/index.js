import { hash } from 'bcrypt';
import dotenv from 'dotenv';
import { addNewUserQuery, checkEmailExistsQuery } from '../../database/queries/index.js';
import { jwtSign, customizedError, signupSchema } from '../../utils/index.js';

dotenv.config();
const signup = async (req, res, next) => {
  try {
    const {
      name, email, password, phone,
    } = await signupSchema.validate(req.body, { abortEarly: false });
    const { rowCount } = await checkEmailExistsQuery(email);
    if (rowCount) {
      throw customizedError(400, 'Email already exists');
    }
    const hashedPassword = await hash(password, 10);
    const { rows: data } = await addNewUserQuery(
      name,
      email,
      phone,
      hashedPassword,
    );
    const token = await jwtSign({
      id: data[0].id,
      email,
      name,
      phone,
    });
    res.cookie('token', token).status(201).json({ message: 'You have been successfully register', status: 201 });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default signup;
