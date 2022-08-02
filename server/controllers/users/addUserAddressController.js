import dotenv from 'dotenv';
import { addUserAddressQuery } from '../../database/queries/index.js';
import { customizedError, addressSchema } from '../../utils/index.js';

dotenv.config();
const addUserAddressController = async (req, res, next) => {
  try {
    const { id } = req.user;
    const {
      city, area, street, block, building,
    } = await addressSchema.validate(req.body, { abortEarly: false });
    const { rows, rowCount } = await addUserAddressQuery(city, area, street, block, building, id);
    if (!rowCount) {
      throw customizedError(400, 'there have error try again later');
    }
    res.status(201).json({ message: 'You have been successfully added new address', status: 201, data: rows });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default addUserAddressController;
