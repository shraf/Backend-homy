import connection from '../../config/connection.js';

const getUserWishlistsQuery = (userId) => {
  const sql = {
    text: 'SELECT * FROM wishlists WHERE user_id = $1 ORDER BY createdAt DESC',
    values: [userId],
  };
  return connection.query(sql);
};
export default getUserWishlistsQuery;
