import connection from '../../config/connection.js';

const getProductsQuery = (archivedValue) => {
  const sql = {
    text: 'SELECT * FROM products WHERE archived = $1 ORDER BY id DESC',
    values: [archivedValue],
  };
  return connection.query(sql);
};
export default getProductsQuery;
