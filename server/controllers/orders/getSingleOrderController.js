import {
  checkEmailExistsQuery,
  checkGuestEmailExistsQuery,
  getSingleOrderQuery,
} from '../../database/queries/index.js';
import { customizedError, singleOrderSchema } from '../../utils/index.js';

const getSingleOrderController = async (req, res, next) => {
  try {
    const { email, orderNumber } = await singleOrderSchema.validate(req.body, {
      abortEarly: false,
    });
    const { rows: user } = await checkEmailExistsQuery(email);
    const { rows: guest } = await checkGuestEmailExistsQuery(email);
    if (user.length) {
      const { rows: userOrder, rowCount } = await getSingleOrderQuery(orderNumber, user[0].id);
      if (!rowCount) {
        throw customizedError(400, 'There have error whit order number');
      }
      const orderData = { ...userOrder[0], name: user[0].name, phone: user[0].phone };
      res.json({ message: 'Successfully retrieved Single Order for user', status: 200, data: orderData });
    } else if (guest.length) {
      const { rows: guestOrder, rowCount } = await getSingleOrderQuery(
        orderNumber,
        null,
        guest[0].id,
      );
      if (!rowCount) {
        throw customizedError(400, 'There have error whit order number');
      }
      const orderData = { ...guestOrder[0], name: guest[0].name, phone: guest[0].phone };
      res.json({ message: 'Successfully retrieved Single Order for guest', status: 200, data: orderData });
    } else {
      throw customizedError(400, 'There have error whit email');
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default getSingleOrderController;
