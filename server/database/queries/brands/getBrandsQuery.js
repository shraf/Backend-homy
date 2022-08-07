import connection from '../../config/connection.js';

const getBrandsQuery = () => {
  const sql = {
    text: 'SELECT name,image FROM brands',
    values: [],
  };
  return connection.query(sql);
};
export default getBrandsQuery;
