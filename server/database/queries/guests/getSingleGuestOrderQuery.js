import connection from '../../config/connection.js';

const getSingleGuestOrderQuery = (orderNumber, guestId) => {
  const sql = {
    text: `SELECT orders.id,
    orders.products,
    orders.amount,
    orders.addresses,
    orders.status,
    orders.order_number,
    orders.createdAt,
    orders.payment,
    guests.name,
    guests.phone
    FROM orders Join guests ON orders.user_id = guests.id GROUP BY orders.id,guests.id 
    HAVING orders.order_number =$1 AND guests.id = $2`,
    values: [orderNumber, guestId],
  };
  return connection.query(sql);
};
export default getSingleGuestOrderQuery;
