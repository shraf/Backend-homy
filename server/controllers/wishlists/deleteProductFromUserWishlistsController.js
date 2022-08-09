import { deleteProductFromUserWishlistsQuery } from '../../database/queries/index.js';

const deleteProductFromUserWishlistsController = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { productId } = req.params;
    const { rows: deletedProduct } = await deleteProductFromUserWishlistsQuery(id, productId);
    res.json({ message: 'Successfully deleted product from user Wishlists ', data: deletedProduct });
  } catch (error) {
    next(error);
  }
};

export default deleteProductFromUserWishlistsController;
