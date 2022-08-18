import connection from '../../config/connection.js';

const archivedSubCategoryQuery = (id) => {
  const sql = {
    text: 'UPDATE sub_categories SET archived = true WHERE id=$1',
    values: [id],
  };
  return connection.query(sql);
};
export default archivedSubCategoryQuery;
