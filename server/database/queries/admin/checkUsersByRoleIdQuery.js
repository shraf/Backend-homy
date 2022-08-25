import connection from '../../config/connection.js';

const checkUsersByRoleIdQuery = (id) => {
  const sql = {
    text: 'SELECT id FROM users WHERE role_id=$1',
    values: [id],
  };
  return connection.query(sql);
};
export default checkUsersByRoleIdQuery;
