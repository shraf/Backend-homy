import connection from '../../config/connection.js';

const getRolesQuery = () => {
  const sql = {
    text: 'SELECT id,role FROM roles',
    values: [],
  };
  return connection.query(sql);
};
export default getRolesQuery;
