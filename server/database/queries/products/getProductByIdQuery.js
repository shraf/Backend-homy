import connection from '../../config/connection.js';

const getProductByIdQuery = (productId) => {
  const sql = {
    text: 'SELECT * FROM products WHERE id =$1 ',
    values: [productId],
  };
  return connection.query(sql);
};
export default getProductByIdQuery;
