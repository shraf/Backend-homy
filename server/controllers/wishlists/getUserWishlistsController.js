import { getProductByIdQuery, getUserWishlistsQuery } from '../../database/queries/index.js';

const getUserWishlistsController = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { rows: wishLists } = await getUserWishlistsQuery(id);
    const wishListProducts = [];
    await Promise.all(
      wishLists.map(async (product) => {
        const { rows: productById } = await getProductByIdQuery(
          Number(product.product_id),
        );
        const contents = await {
          ...productById[0],
          quantity: product.quantity,
          idProductAtCart: product.id,
          createdAtCart: product.createdat,
        };
        wishListProducts.push(contents);
      }),
    );
    res.json({ message: 'Successfully retrieved User Wishlists', data: wishListProducts });
  } catch (error) {
    next(error);
  }
};

export default getUserWishlistsController;
