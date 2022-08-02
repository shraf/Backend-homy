import { updateUserAddressQuery } from '../../database/queries/index.js';
import { updateUserAddressSchema, customizedError } from '../../utils/index.js';

const updateUserAddressController = async (req, res, next) => {
  try {
    const {
      city,
      area,
      street,
      building,
      block,
      id,
    } = await updateUserAddressSchema.validate(req.body, { abortEarly: false });
    const { rows, rowCount } = await updateUserAddressQuery(
      city,
      area,
      street,
      building,
      block,
      id,
    );
    if (!rowCount) {
      throw customizedError(400, 'there have error try again later');
    }
    res.json({
      message: 'Your data updated successfully',
      status: 200,
      data: rows[0],
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default updateUserAddressController;
