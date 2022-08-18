import connection from '../../config/connection.js';

const updateSubCategoryQuery = (name, categoryId, id) => {
  const sql = {
    text: 'UPDATE sub_categories SET name=$1, category_id=$2 WHERE id=$3',
    values: [name, categoryId, id],
  };
  return connection.query(sql);
};
export default updateSubCategoryQuery;
