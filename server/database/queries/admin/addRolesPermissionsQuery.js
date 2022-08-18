import connection from '../../config/connection.js';

const addRolesPermissionsQuery = (roleId, permissionId, pageId) => {
  const sql = {
    text: 'INSERT INTO roles_permissions (role_id, permission_id, page_id) VALUES ($1, $2, $3) RETURNING id',
    values: [roleId, permissionId, pageId],
  };
  return connection.query(sql);
};
export default addRolesPermissionsQuery;
