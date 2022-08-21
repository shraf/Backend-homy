import connection from '../../config/connection.js';

const getAllOrdersJoinUsersQuery = () => {
  const sql = {
    text: `SELECT o.id,o.amount,o.products,o.addresses,o.status,o.order_number,o.payment,u.name as name,
    u.phone as phone,u.email as email
     FROM orders as o JOIN users as u ON o.user_id = u.id 
     `,
    values: [],
  };
  return connection.query(sql);
};
export default getAllOrdersJoinUsersQuery;
