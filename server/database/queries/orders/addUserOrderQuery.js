import connection from '../../config/connection.js';

const addUserOrderQuery = (products, amount, addresses, orderNumber, payment, userId) => {
  const sql = {
    text: `INSERT INTO orders(products, amount, addresses,order_number, payment,user_id, guest_id) 
    VALUES ($1, $2, $3, $4, $5, $6, NULL) RETURNING *`,
    values: [products, amount, addresses, orderNumber, payment, userId],
  };
  return connection.query(sql);
};
export default addUserOrderQuery;
