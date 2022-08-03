import connection from '../../config/connection.js';

const getSingleProductReviewByIdQuery = (productId) => {
  const sql = {
    text: `SELECT reviews.comment,reviews.rate,users.name FROM reviews 
     JOIN users ON reviews.user_id = users.id  GROUP BY reviews.id,users.id HAVING product_id=$1 ORDER BY reviews.createdAt DESC `,
    values: [productId],
  };
  return connection.query(sql);
};
export default getSingleProductReviewByIdQuery;
