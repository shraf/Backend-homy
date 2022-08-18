import connection from '../../config/connection.js';

const checkRoleExistsQuery = (role) => {
  const sql = {
    text: 'select id from roles where LOWER(role) = $1',
    values: [role],
  };
  return connection.query(sql);
};
export default checkRoleExistsQuery;
