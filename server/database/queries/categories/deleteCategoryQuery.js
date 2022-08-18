import connection from '../../config/connection.js';

const deleteCategoryQuery = (id) => {
  const sql = {
    text: 'DELETE FROM categories WHERE id=$1',
    values: [id],
  };
  return connection.query(sql);
};
export default deleteCategoryQuery;
