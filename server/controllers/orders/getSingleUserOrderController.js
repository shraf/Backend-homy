import { getSingleOrderQuery } from '../../database/queries/index.js';
import { customizedError } from '../../utils/index.js';

const getSingleUserOrderController = async (req, res, next) => {
  try {
    const { name, phone } = req.user;
    const { orderNumber } = req.params;
    const { rows } = await getSingleOrderQuery(orderNumber, req.user.id, null);
    if (!rows.length) {
      throw customizedError(400, 'There have error whit order number');
    }
    const orderData = { ...rows[0], name, phone };
    res.json({ message: 'Successfully retrieved Single Order', status: 200, data: orderData });
  } catch (error) {
    next(error);
  }
};

export default getSingleUserOrderController;
