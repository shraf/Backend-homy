import connection from '../../config/connection.js';

const getProductsByCategoryIdQuery = (minPrice, maxPrice, page, categoryId) => {
  const sql = {
    text: `SELECT * FROM products WHERE price BETWEEN $1 AND $2 
    AND category_id=$4 LIMIT 4 OFFSET 4*($3-1)`,
    values: [minPrice, maxPrice, page, categoryId],
  };
  return connection.query(sql);
};
export default getProductsByCategoryIdQuery;
