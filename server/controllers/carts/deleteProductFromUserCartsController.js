import { deleteProductFromUserCartsQuery } from '../../database/queries/index.js';

const deleteProductFromUserCartsController = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { productId } = req.params;
    const { rows: deletedProduct } = await deleteProductFromUserCartsQuery(id, productId);
    res.json({ message: 'Successfully deleted product from user carts ', data: deletedProduct });
  } catch (error) {
    next(error);
  }
};

export default deleteProductFromUserCartsController;
