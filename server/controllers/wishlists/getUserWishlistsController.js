import { getUserWishlistsQuery } from '../../database/queries/index.js';

const getUserWishlistsController = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { rows: carts } = await getUserWishlistsQuery(id);
    res.json({ message: 'Successfully retrieved User Wishlists', data: carts });
  } catch (error) {
    next(error);
  }
};

export default getUserWishlistsController;
