import {
  addProductToUserCartsQuery,
  getUserCartsQuery,
  updateProductQuantityQuery,
} from '../../database/queries/index.js';
import { cartsSchema, customizedError } from '../../utils/index.js';

const addProductsToUserCartsController = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { carts } = await cartsSchema.validate(req.body, {
      abortEarly: false,
    });
    // get product for user in cart
    const { rows: ProductsInCarts } = await getUserCartsQuery(id);
    const userCartIds = ProductsInCarts.map((productInCart) => productInCart.product_id);
    const CartIds = carts.map((productInBody) => productInBody.id);
    const newProductIds = CartIds.filter((cartId) => !userCartIds.includes(cartId));
    const newUserProductCarts = carts.filter((cart) => newProductIds.includes(cart.id));
    const existProductIds = CartIds.filter((cartId) => userCartIds.includes(cartId));
    newUserProductCarts.forEach(async (product) => {
      await addProductToUserCartsQuery(id, product.id, product.quantity);
    });
    const existUserProductCarts = carts.filter((cart) => existProductIds.includes(cart.id));
    existUserProductCarts.forEach(async (product) => {
      await updateProductQuantityQuery(id, product.id, product.quantity);
    });
    const { rows: newUserProducts } = await getUserCartsQuery(id);
    res.json({ message: 'successfully added new product and edit quantity in carts for user', data: newUserProducts });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default addProductsToUserCartsController;
