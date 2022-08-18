import connection from '../../config/connection.js';

const getBanarasQuery = () => {
  const sql = {
    text: 'SELECT * FROM banaras ORDER BY id DESC LIMIT 5',
    values: [],
  };
  return connection.query(sql);
};
export default getBanarasQuery;
