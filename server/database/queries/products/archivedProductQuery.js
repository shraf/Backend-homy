import connection from '../../config/connection.js';

const archivedProductQuery = (id) => {
  const sql = {
    text: 'UPDATE products SET archived = true WHERE id=$1',
    values: [id],
  };
  return connection.query(sql);
};
export default archivedProductQuery;
