import connection from '../../config/connection.js';

const checkEmailExistsQuery = (email) => {
  const sql = {
    text: 'select id, password, name, phone from users where email = $1',
    values: [email],
  };
  return connection.query(sql);
};
export default checkEmailExistsQuery;
