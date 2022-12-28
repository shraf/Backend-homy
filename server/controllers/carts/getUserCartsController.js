import { getUserCartQuery } from '../../database/queries/carts/getUserCartsQuery.js';
import {
  getProductByIdQuery,
  getUserCartsQuery,
} from '../../database/queries/index.js';

const getUserCartsController = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { rows: carts } = await getUserCartsQuery(id);
    const cartProducts = [];
    await Promise.all(
      carts.map(async (product) => {
        const { rows: productById } = await getProductByIdQuery(
          Number(product.product_id),
        );
        const contents = await {
          ...productById[0],
          quantity: product.quantity,
          idProductAtCart: product.id,
          createdAtCart: product.createdat,
        };
        cartProducts.push(contents);
      }),
    );
    res.json({ message: 'Successfully retrieved User Carts', data: cartProducts });
  } catch (error) {
    next(error);
  }
};

export const getUserCartControloler = async (req, res, next) => {
  try {
    const { id } = req.user
    const data = await getUserCartQuery(id)
    return res.json({ message: "succesfully retrieved User cart", data })
  }
  catch (err) {
    next(err)
  }
}

export default getUserCartsController;
