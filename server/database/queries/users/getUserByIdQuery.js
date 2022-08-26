import connection from '../../config/connection.js';

const getUserByIdQuery = (id) => {
  const sql = {
    text: 'SELECT id, email, name, phone, role_id FROM users WHERE id = $1',
    values: [id],
  };
  return connection.query(sql);
};
export default getUserByIdQuery;
