import connection from '../../config/connection.js';

const updateProductQuantityQuery = (userId, productId, quantity) => {
  const sql = {
    text: `UPDATE carts
    SET quantity = $3
    WHERE user_id = $1 AND product_id = $2
    RETURNING *`,
    values: [userId, productId, quantity],
  };
  return connection.query(sql);
};
export default updateProductQuantityQuery;
