import connection from '../../config/connection.js';
import queryBuilder from '../../config/queryBuilder.js';

const getUserCartsQuery = (userId) => {
  const sql = {
    text: 'SELECT * FROM carts WHERE user_id = $1 ORDER BY createdAt DESC',
    values: [userId],
  };
  return connection.query(sql);
};

export const getAvailableCartsQuery = async (userId) => {
  const cart = await queryBuilder.select()
    .from('cart')
    .where({ is_sold: false })
    .first()
  return cart
}
export default getUserCartsQuery;
