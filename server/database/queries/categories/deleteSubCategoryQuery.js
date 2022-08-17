import connection from '../../config/connection.js';

const deleteSubCategoryQuery = (id) => {
  const sql = {
    text: 'DELETE FROM sub_categories WHERE id=$1',
    values: [id],
  };
  return connection.query(sql);
};
export default deleteSubCategoryQuery;
