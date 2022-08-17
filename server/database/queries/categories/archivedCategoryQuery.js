import connection from '../../config/connection.js';

const archivedCategoryQuery = (id) => {
  const sql = {
    text: 'UPDATE categories SET archived = true WHERE id=$1',
    values: [id],
  };
  return connection.query(sql);
};
export default archivedCategoryQuery;
