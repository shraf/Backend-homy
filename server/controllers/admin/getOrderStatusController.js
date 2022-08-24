import { getOrderStatusQuery } from '../../database/queries/index.js';

const getOrderStatusController = async (req, res, next) => {
  try {
    const { rows } = await getOrderStatusQuery();
    res.json({ message: 'Successfully retrieved all Status', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getOrderStatusController;
