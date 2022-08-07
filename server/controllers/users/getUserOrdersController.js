import { getUserOrdersQuery } from '../../database/queries/index.js';

const getAddressesUserController = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { rows } = await getUserOrdersQuery(id);
    res.json({ message: 'Successfully retrieved all orders', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getAddressesUserController;
