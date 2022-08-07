import { getUserAddressesQuery } from '../../database/queries/index.js';

const getUserOrdersController = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { rows } = await getUserAddressesQuery(id);
    res.json({ message: 'Successfully retrieved all addresses', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getUserOrdersController;
