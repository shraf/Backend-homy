import connection from '../../config/connection.js';

const updateProductRatingQuery = (
  rating,
  usersRatedNumber,
  id,
) => {
  const sql = {
    text: 'UPDATE products SET rating = $1, users_rated_number = $2 WHERE id = $3 RETURNING *',
    values: [rating, usersRatedNumber, id],
  };
  return connection.query(sql);
};
export default updateProductRatingQuery;
