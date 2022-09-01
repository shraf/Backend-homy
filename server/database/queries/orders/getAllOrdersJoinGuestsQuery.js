import connection from '../../config/connection.js';

const getAllOrdersJoinGuestsQuery = () => {
  const sql = {
    text: `SELECT o.id,o.amount,o.products,o.addresses,o.status,o.order_number,o.payment,o.createdAt,
    o.promo_discount,o.sub_total,o.shipping_cost,g.name as name,
     g.phone as phone,g.email as email
     FROM orders as o JOIN guests as g ON o.guest_id = g.id ORDER BY o.createdAt DESC`,
    values: [],
  };
  return connection.query(sql);
};
export default getAllOrdersJoinGuestsQuery;
