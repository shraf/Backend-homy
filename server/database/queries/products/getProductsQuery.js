import connection from '../../config/connection.js';

const getProductsQuery = () => {
  const sql = {
    text: 'SELECT * FROM products',
    values: [],
  };
  return connection.query(sql);
};
export default getProductsQuery;
