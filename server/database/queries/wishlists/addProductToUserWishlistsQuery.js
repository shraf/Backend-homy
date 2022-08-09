import connection from '../../config/connection.js';

const addProductToUserWishlistsQuery = (userId, productId) => {
  const sql = {
    text: 'INSERT INTO wishlists(user_id ,product_id) VALUES($1,$2) RETURNING *',
    values: [userId, productId],
  };
  return connection.query(sql);
};
export default addProductToUserWishlistsQuery;
