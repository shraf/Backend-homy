import connection from '../../config/connection.js';

const getBannersQuery = () => {
  const sql = {
    text: 'SELECT * FROM banners ORDER BY id DESC LIMIT 5',
    values: [],
  };
  return connection.query(sql);
};
export default getBannersQuery;
