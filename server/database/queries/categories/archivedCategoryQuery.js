import connection from '../../config/connection.js';

const archivedCategoryQuery = (archive, id) => {
  const sql = {
    text: 'UPDATE categories SET archived = $1 WHERE id=$2 Returning *',
    values: [archive, id],
  };
  return connection.query(sql);
};
export default archivedCategoryQuery;
