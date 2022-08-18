import connection from '../../config/connection.js';

const checkEmailExistsQuery = (email) => {
  const sql = {
    text: 'select id, email, password, name, phone, role_id from users where email = $1',
    values: [email],
  };
  return connection.query(sql);
};
export default checkEmailExistsQuery;
