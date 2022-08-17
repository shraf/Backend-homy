import connection from '../../config/connection.js';

const archivedBrandsQuery = (id) => {
  const sql = {
    text: 'UPDATE brands SET archived = true WHERE id = $1',
    values: [id],
  };
  return connection.query(sql);
};
export default archivedBrandsQuery;
