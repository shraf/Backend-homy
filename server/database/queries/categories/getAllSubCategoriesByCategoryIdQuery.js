import connection from '../../config/connection.js';

const getAllSubCategoriesByCategoryIdQuery = (categoryId) => {
  const sql = {
    text: 'SELECT id FROM sub_categories WHERE category_id = $1',
    values: [categoryId],
  };
  return connection.query(sql);
};
export default getAllSubCategoriesByCategoryIdQuery;
