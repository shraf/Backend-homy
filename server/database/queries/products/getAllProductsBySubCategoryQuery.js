import connection from '../../config/connection.js';

const getAllProductsBySubCategoryQuery = (subCategoryId) => {
  const sql = {
    text: 'SELECT * FROM products WHERE sub_category_id=$1',
    values: [subCategoryId],
  };
  return connection.query(sql);
};
export default getAllProductsBySubCategoryQuery;
