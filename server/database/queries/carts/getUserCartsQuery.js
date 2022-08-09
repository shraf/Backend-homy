import connection from '../../config/connection.js';

const getUserCartsQuery = (userId) => {
  const sql = {
    text: 'SELECT * FROM carts WHERE user_id = $1 ORDER BY createdAt DESC',
    values: [userId],
  };
  return connection.query(sql);
};
export default getUserCartsQuery;
