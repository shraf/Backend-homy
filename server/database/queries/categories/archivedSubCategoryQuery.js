import connection from '../../config/connection.js';

const archivedSubCategoryQuery = (archive, id) => {
  const sql = {
    text: 'UPDATE sub_categories SET archived = $1 WHERE id=$2 RETURNING *',
    values: [archive, id],
  };
  return connection.query(sql);
};
export default archivedSubCategoryQuery;
