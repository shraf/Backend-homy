import connection from '../../config/connection.js';

const getRecommendedProductQuery = (categoriesId) => {
  const sql = {
    text: 'SELECT * FROM products WHERE category_id = $1 limit 4',
    values: [categoriesId],
  };
  return connection.query(sql);
};
export default getRecommendedProductQuery;
