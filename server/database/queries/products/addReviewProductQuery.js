import connection from '../../config/connection.js';

const addReviewProductQuery = (comment, rate, userId, productId) => {
  const sql = {
    text: 'INSERT INTO reviews(comment, rate, user_id, product_id) VALUES ($1,$2,$3,$4) RETURNING *',
    values: [comment, rate, userId, productId],
  };
  return connection.query(sql);
};
export default addReviewProductQuery;
