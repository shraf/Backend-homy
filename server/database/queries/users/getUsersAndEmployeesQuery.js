import connection from '../../config/connection.js';

const getUsersAndEmployeesQuery = () => {
  const sql = {
    text: `SELECT u.id as userId, r.id as roleId,u.email,u.phone,u.name,
    r.role FROM users as u JOIN roles as r ON u.role_id = r.id WHERE u.role_id != 2
    ORDER BY u.id DESC`,
    values: [],
  };
  return connection.query(sql);
};
export default getUsersAndEmployeesQuery;
