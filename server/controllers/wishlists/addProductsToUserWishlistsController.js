import {
  addProductToUserWishlistsQuery,
  getUserWishlistsQuery,
} from '../../database/queries/index.js';
import { customizedError, wishlistsSchema } from '../../utils/index.js';

const addProductsToUserWishlistsController = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { wishlists } = await wishlistsSchema.validate(req.body, {
      abortEarly: false,
    });
    const { rows: productsInWishlists } = await getUserWishlistsQuery(id);
    const userWishlistIds = productsInWishlists
      .map((productInWishlist) => productInWishlist.product_id);
    const WishlistIds = wishlists.map((productInBody) => productInBody.id);
    const newProductIds = WishlistIds.filter((cartId) => !userWishlistIds.includes(cartId));
    const newUserProductWishlists = wishlists
      .filter((wishlist) => newProductIds.includes(wishlist.id));
    newUserProductWishlists.forEach(async (product) => {
      await addProductToUserWishlistsQuery(id, product.id, product.quantity);
    });

    const { rows: newUserProducts } = await getUserWishlistsQuery(id);
    res.json({ message: 'successfully added new product in wishlists for user', data: newUserProducts });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default addProductsToUserWishlistsController;
