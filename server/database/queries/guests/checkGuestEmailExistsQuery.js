import connection from '../../config/connection.js';

const checkGuestEmailExistsQuery = (email) => {
  const sql = {
    text: 'select id, name, phone from guests where email = $1',
    values: [email],
  };
  return connection.query(sql);
};
export default checkGuestEmailExistsQuery;
