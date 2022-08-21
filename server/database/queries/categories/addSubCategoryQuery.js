import connection from '../../config/connection.js';

const addSubCategoryQuery = (name, categoryId) => {
  const sql = {
    text: 'INSERT INTO sub_categories(name,category_id) VALUES($1, $2) RETURNING *',
    values: [name, categoryId],
  };
  return connection.query(sql);
};
export default addSubCategoryQuery;
