import connection from '../../config/connection.js';

const checkEmailExistsQuery = (email) => {
  const sql = {
    text: 'SELECT id, email, password, name, phone, role_id FROM users WHERE email = $1',
    values: [email],
  };
  return connection.query(sql);
};
export default checkEmailExistsQuery;
