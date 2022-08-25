import connection from '../../config/connection.js';

const deleteRoleQuery = (id) => {
  const sql = {
    text: 'DELETE FROM roles WHERE id=$1 RETURNING *',
    values: [id],
  };
  return connection.query(sql);
};
export default deleteRoleQuery;
