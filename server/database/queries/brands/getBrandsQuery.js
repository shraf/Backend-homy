import connection from '../../config/connection.js';

const getBrandsQuery = () => {
  const sql = {
    text: 'SELECT name,image,id FROM brands ORDER BY id DESC',
    values: [],
  };
  return connection.query(sql);
};
export default getBrandsQuery;
