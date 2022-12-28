import { getAvailableCartsQuery } from '../../database/queries/carts/getUserCartsQuery.js';
import { deleteProductFromUserCartsQuery } from '../../database/queries/index.js';

const deleteProductFromUserCartsController = async (req, res, next) => {
  try {
    const { id } = req.user;
    const product_id  = req.params.id;
    const cart = await getAvailableCartsQuery(id)
    if(!cart)
      return res.status(404).send()
    await deleteProductFromUserCartsQuery(cart.id, product_id);
    res.json({ message: 'Successfully deleted product from user carts '});
  } catch (error) {
    next(error);
  }
};

export default deleteProductFromUserCartsController;
