import connection from '../../config/connection.js';

const addEmployeeQuery = (name, email, password, phone, roleId) => {
  const sql = {
    text: 'INSERT INTO users (name, email, password, phone, role_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    values: [name, email, password, phone, roleId],
  };
  return connection.query(sql);
};
export default addEmployeeQuery;
