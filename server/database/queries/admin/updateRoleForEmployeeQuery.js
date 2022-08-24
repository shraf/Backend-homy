import connection from '../../config/connection.js';

const updateRoleForEmployeeQuery = (roleId, id) => {
  const sql = {
    text: 'UPDATE users SET role_id=$1 WHERE id = $2 RETURNING *',
    values: [roleId, id],
  };
  return connection.query(sql);
};
export default updateRoleForEmployeeQuery;
