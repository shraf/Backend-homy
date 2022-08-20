import connection from '../../config/connection.js';

const getAllBannersQuery = () => {
  const sql = {
    text: 'SELECT * FROM banners ORDER BY id DESC ',
    values: [],
  };
  return connection.query(sql);
};
export default getAllBannersQuery;
