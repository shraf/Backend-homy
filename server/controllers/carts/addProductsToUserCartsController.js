import createUserCartQuery from '../../database/queries/carts/createUserCartQuery.js';
import { getAvailableCartsQuery } from '../../database/queries/carts/getUserCartsQuery.js';
import {
  addProductToUserCartsQuery,
  getUserCartsQuery,
  updateProductQuantityQuery,
} from '../../database/queries/index.js';
import { cartsSchema, customizedError } from '../../utils/index.js';

const addProductsToUserCartsController = async (req, res, next) => {
  try {

    const {id} = req.user
    const {product} = req.body
    const {quantity} = product
    const product_id = product.id
    let availableCart = await getAvailableCartsQuery(id)
    const new_cart_id = availableCart
      ? availableCart.id
      : await createUserCartQuery(id)

    await addProductToUserCartsQuery(new_cart_id, product_id, quantity)
    res.status(200).send();
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default addProductsToUserCartsController;
