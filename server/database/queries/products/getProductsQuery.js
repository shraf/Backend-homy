import connection from '../../config/connection.js';

const getProductsQuery = (archivedValue) => {
  const sql = {
    text: 'SELECT * FROM products WHERE archived = $1',
    values: [archivedValue],
  };
  return connection.query(sql);
};
export default getProductsQuery;
