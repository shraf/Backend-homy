import connection from '../../config/connection.js';

const archivedProductQuery = (archive, id) => {
  const sql = {
    text: 'UPDATE products SET archived = $1 WHERE id=$2 RETURNING *',
    values: [archive, id],
  };
  return connection.query(sql);
};
export default archivedProductQuery;
