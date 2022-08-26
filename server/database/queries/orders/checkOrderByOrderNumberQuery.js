import connection from '../../config/connection.js';

const checkOrderByOrderNumberQuery = (orderNumber) => {
  const sql = {
    text: 'SELECT * FROM orders WHERE LOWER(order_number) = $1',
    values: [orderNumber],
  };
  return connection.query(sql);
};
export default checkOrderByOrderNumberQuery;
