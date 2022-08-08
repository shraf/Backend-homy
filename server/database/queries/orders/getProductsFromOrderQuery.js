import connection from '../../config/connection.js';

const getProductsFromOrderQuery = () => {
  const sql = {
    text: 'SELECT products FROM orders',
    values: [],
  };
  return connection.query(sql);
};
export default getProductsFromOrderQuery;
