import {
  addGuestOrderQuery,
  addGuestQuery,
  addUserOrderQuery,
  checkEmailExistsQuery,
  checkGuestEmailExistsQuery,
  checkOrderByOrderNumberQuery,
} from '../../database/queries/index.js';
import { customizedError, orderSchema } from '../../utils/index.js';

const addOrderController = async (req, res, next) => {
  try {
    const {
      email,
      phone,
      name,
      amount,
      payment,
      products,
      addresses,
      orderNumber,
    } = await orderSchema.validate(req.body, { abortEarly: false });
    const { rows: order} = await checkOrderByOrderNumberQuery(orderNumber.toLocaleLowerCase());
    if (order.length) {
      throw customizedError(400,'this order number exists');
    }
    const { rows: user } = await checkEmailExistsQuery(email);
    const { rows: guest } = await checkGuestEmailExistsQuery(email);
    if (user.length) {
      const { rows: guestOrder } = await addUserOrderQuery(
        products,
        amount,
        addresses,
        orderNumber,
        payment,
        user[0].id,
      );
      res.status(201).json({
        message: 'Order added successfully for User',
        status: 201,
        data: guestOrder,
      });
    } else if (guest.length) {
      const { rows: GuestOrder } = await addGuestOrderQuery(
        products,
        amount,
        addresses,
        orderNumber,
        payment,
        guest[0].id,
      );
      res.status(201).json({
        message: 'Order added successfully for Guest',
        status: 201,
        data: GuestOrder,
      });
    } else {
      const { rows: newGuest } = await addGuestQuery(
        name,
        email,
        phone,
        addresses[0],
        addresses[1],
        addresses[2],
        addresses[3],
        addresses[4],
      );
      const { rows: NewGuestOrder } = await addGuestOrderQuery(
        products,
        amount,
        addresses,
        orderNumber,
        payment,
        newGuest[0].id,
      );
      res.status(201).json({
        message: 'Order added successfully for New Guest',
        status: 201,
        data: NewGuestOrder,
      });
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default addOrderController;
