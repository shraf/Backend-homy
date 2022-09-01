import connection from '../../config/connection.js';

const getAllOrdersJoinUsersQuery = () => {
  const sql = {
    text: `SELECT o.id,o.amount,o.products,o.addresses,o.status,o.order_number,o.payment,o.createdAt,
    o.promo_discount,o.sub_total,o.shipping_cost,u.name as name,
    u.phone as phone,u.email as email
     FROM orders as o JOIN users as u ON o.user_id = u.id ORDER BY o.createdAt DESC 
     `,
    values: [],
  };
  return connection.query(sql);
};
export default getAllOrdersJoinUsersQuery;
