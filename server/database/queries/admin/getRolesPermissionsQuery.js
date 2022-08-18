import connection from '../../config/connection.js';

const getRolesPermissionsQuery = (roleId) => {
  const sql = {
    text: `SELECT *, p.name as pageName, per.name as methodName FROM roles_permissions as rp JOIN pages as p 
    on rp.page_id = p.id JOIN permissions as per ON rp.permission_id =per.id JOIN roles as r ON r.id=rp.role_id  WHERE rp.role_id=$1 `,
    values: [roleId],
  };
  return connection.query(sql);
};
export default getRolesPermissionsQuery;
