import connection from '../../config/connection.js';

const getSubCategoriesQuery = (categoryId) => {
  const sql = {
    text: 'SELECT * FROM sub_categories WHERE category_id =$1 ',
    values: [categoryId],
  };
  return connection.query(sql);
};
export default getSubCategoriesQuery;
