import connection from '../../config/connection.js';

const getUsersAndEmployeesQuery = () => {
  const sql = {
    text: 'SELECT * FROM users JOIN roles ON users.role_id = roles.id WHERE users.role_id != 2',
    values: [],
  };
  return connection.query(sql);
};
export default getUsersAndEmployeesQuery;
