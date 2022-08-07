import { getSingleUserOrderQuery } from '../../database/queries/index.js';

const getSingleUserOrderController = async (req, res, next) => {
  try {
    const { orderNumber } = req.params;
    const { rows } = await getSingleUserOrderQuery(orderNumber);
    res.json({ message: 'Successfully retrieved Single Order', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getSingleUserOrderController;
