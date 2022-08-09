import { deleteUserAddressQuery } from '../../database/queries/index.js';
import { customizedError } from '../../utils/index.js';

const deleteUserAddressController = async (req, res, next) => {
  try {
    const { addressId } = req.params;
    const { rows, rowCount } = await deleteUserAddressQuery(addressId);
    if (!rowCount) {
      throw customizedError(400, 'There have error try again later');
    }
    res.json({ message: 'Successfully delete address', status: 200, data: rows[0] });
  } catch (error) {
    next(error);
  }
};

export default deleteUserAddressController;
