import connection from '../../config/connection.js';

const getPermissionsQuery = () => {
  const sql = {
    text: 'SELECT * FROM permissions',
    values: [],
  };
  return connection.query(sql);
};
export default getPermissionsQuery;
