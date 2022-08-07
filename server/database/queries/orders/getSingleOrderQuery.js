import connection from '../../config/connection.js';

const getSingleOrderQuery = (orderNumber, userId, guestId) => {
  const sql = {
    text: 'SELECT * FROM orders WHERE order_number = $1 AND (user_id=$2 OR guest_id=$3)',
    values: [orderNumber, userId, guestId],
  };
  return connection.query(sql);
};
export default getSingleOrderQuery;
