import connection from '../../config/connection.js';

const getAllProductsByCategoryIdQuery = (categoryId) => {
  const sql = {
    text: 'SELECT * FROM products WHERE category_id=$1',
    values: [categoryId],
  };
  return connection.query(sql);
};
export default getAllProductsByCategoryIdQuery;
