import connection from '../../config/connection.js';

const getRolesPermissionsQuery = (roleId) => {
  const sql = {
    text: 'SELECT *, p.name as page FROM roles_permissions as rp JOIN pages as p on rp.page_id = p.id JOIN permissions as pr ON rp.permission_id =pr.id  WHERE rp.role_id=$1',
    values: [roleId],
  };
  return connection.query(sql);
};
export default getRolesPermissionsQuery;
