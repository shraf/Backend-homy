import { hash } from 'bcrypt';
import { addEmployeeQuery, checkEmailExistsQuery } from '../../database/queries/index.js';
import { customizedError, employeeSchema } from '../../utils/index.js';

const addEmployeeController = async (req, res, next) => {
  try {
    const {
      name, email, password, phone, roleId,
    } = await employeeSchema.validate(req.body, { abortEarly: false });
    const { rowCount } = await checkEmailExistsQuery(email);
    if (rowCount) {
      throw customizedError(400, 'Email already exists');
    }
    const hashedPassword = await hash(password, 10);
    const { rows: data } = await addEmployeeQuery(
      name,
      email,
      hashedPassword,
      phone,
      roleId,
    );
    res.status(201).json({
      message: 'You have been successfully added employee',
      status: 201,
      data,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default addEmployeeController;
