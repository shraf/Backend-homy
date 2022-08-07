import connection from '../../config/connection.js';

const getSingleUserOrderQuery = (orderNumber) => {
  const sql = {
    text: `SELECT orders.id,
    orders.products,
    orders.amount,
    orders.addresses,
    orders.status,
    orders.order_number,
    orders.createdAt,
    orders.payment,
    users.name,
    users.phone
    FROM orders Join users ON orders.user_id = users.id GROUP BY orders.id,users.id HAVING orders.order_number = $1`,
    values: [orderNumber],
  };
  return connection.query(sql);
};
export default getSingleUserOrderQuery;
