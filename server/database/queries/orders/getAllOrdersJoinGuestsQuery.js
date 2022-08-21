import connection from '../../config/connection.js';

const getAllOrdersJoinGuestsQuery = () => {
  const sql = {
    text: `SELECT o.id,o.amount,o.products,o.addresses,o.status,o.order_number,o.payment,g.name as name,
     g.phone as phone,g.email as email
     FROM orders as o JOIN guests as g ON o.guest_id = g.id `,
    values: [],
  };
  return connection.query(sql);
};
export default getAllOrdersJoinGuestsQuery;
