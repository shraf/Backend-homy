import {
  checkEmailExistsQuery,
  checkGuestEmailExistsQuery,
} from '../../database/queries/index.js';
import { customizedError, orderSchema } from '../../utils/index.js';

const addOrderController = async (req, res, next) => {
  try {
    const {
      email,
      name,
    //   phone,
      orderNumber,
      amount,
      payment,
      products,
      addresses,
    } = await orderSchema.validate(req.body, { abortEarly: false });
    console.log(email, name, orderNumber, amount, payment, products, addresses);
    // const { rows: user } = await checkEmailExistsQuery(email);
    // const { rows: guest } = await checkGuestEmailExistsQuery(email);
    // if (user.length) {
    //   console.log('yes there have user', user[0].id);
    //   res.end();
    // } else if (guest.length) {
    //   console.log('yes there have guest', guest[0].id);
    //   res.end();
    // } else {
    //   console.log(' no the email not exists');
    //   res.end();
    // }
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default addOrderController;
