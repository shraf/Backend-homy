import { deleteUserAddressQuery } from '../../database/queries/index.js';
import { idAddressSchema, customizedError } from '../../utils/index.js';

const deleteUserAddressController = async (req, res, next) => {
  try {
    const {
      id,
    } = await idAddressSchema.validate(req.body, { abortEarly: false });
    const { rows, rowCount } = await deleteUserAddressQuery(id);
    if (!rowCount) {
      throw customizedError(400, 'There have error try again later');
    }
    res.json({ message: 'Successfully delete address', status: 200, data: rows[0] });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default deleteUserAddressController;
