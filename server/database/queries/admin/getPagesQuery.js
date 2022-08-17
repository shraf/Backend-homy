import connection from '../../config/connection.js';

const getPagesQuery = () => {
  const sql = {
    text: 'SELECT * FROM pages',
    values: [],
  };
  return connection.query(sql);
};
export default getPagesQuery;
