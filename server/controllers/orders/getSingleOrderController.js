/* eslint-disable no-sequences */
import {
  checkEmailExistsQuery,
  checkGuestEmailExistsQuery,
  getProductByIdWithCategoryQuery,
  getSingleOrderQuery,
} from '../../database/queries/index.js';
import { customizedError, singleOrderSchema } from '../../utils/index.js';

const handleProductsForOrder = async (
  orderNumber,
  userId,
  guestId,
  name,
  phone,
) => {
  const { rows: orderInfo, rowCount } = await getSingleOrderQuery(
    orderNumber,
    userId,
    guestId,
  );
  if (!rowCount) {
    throw customizedError(400, 'There have error whit order number');
  }
  const orderProducts = [];
  await Promise.all(
    orderInfo[0].products.map(async (product) => {
      const { rows: productById } = await getProductByIdWithCategoryQuery(
        Number(product[0]),
      );
      const contents = await {
        image: productById[0].image,
        name: productById[0].productname,
        categoryName: productById[0].categoryname,
        quantity: product[1],
        price: product[2],
        discount: product[3],
      };
      orderProducts.push(contents);
    }),
  );
  return {
    ...orderInfo[0],
    orderProducts,
    name,
    phone,
  };
};

const getSingleOrderController = async (req, res, next) => {
  try {
    const { email, orderNumber } = await singleOrderSchema.validate(req.body, {
      abortEarly: false,
    });
    const { rows: user } = await checkEmailExistsQuery(email);
    const { rows: guest } = await checkGuestEmailExistsQuery(email);
    if (user.length) {
      const orderData = await handleProductsForOrder(
        orderNumber,
        user[0].id,
        null,
        user[0].name,
        user[0].phone,
      );
      res.json({
        message: 'Successfully retrieved Single Order for user',
        status: 200,
        data: orderData,
      });
    } else if (guest.length) {
      const orderData = await handleProductsForOrder(
        orderNumber,
        null,
        guest[0].id,
        guest[0].name,
        guest[0].phone,
      );
      res.json({
        message: 'Successfully retrieved Single Order for guest',
        status: 200,
        data: orderData,
      });
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
