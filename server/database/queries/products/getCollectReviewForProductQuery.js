import connection from '../../config/connection.js';

const getCollectReviewForProductQuery = (productId) => {
  const sql = {
    text: 'SELECT COUNT(rate),rate FROM reviews WHERE product_id = $1 GROUP BY rate',
    values: [productId],
  };
  return connection.query(sql);
};
export default getCollectReviewForProductQuery;
