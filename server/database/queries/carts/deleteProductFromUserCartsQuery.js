import connection from '../../config/connection.js';

const deleteProductFromUserCartsQuery = (userId, productId) => {
  const sql = {
    text: 'DELETE FROM carts WHERE user_id = $1 AND product_id = $2 RETURNING *',
    values: [userId, productId],
  };
  return connection.query(sql);
};
export default deleteProductFromUserCartsQuery;
