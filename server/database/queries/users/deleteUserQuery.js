import connection from '../../config/connection.js';

const deleteUserQuery = (id) => {
  const sql = {
    text: 'DELETE FROM users WHERE id = $1',
    values: [id],
  };
  return connection.query(sql);
};
export default deleteUserQuery;
