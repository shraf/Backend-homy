import connection from '../../config/connection.js';

const addGuestOrderQuery = (products, amount, addresses, orderNumber, payment, guestId) => {
  const sql = {
    text: `INSERT INTO orders(products, amount, addresses,order_number, payment,user_id, guest_id) 
        VALUES ($1, $2, $3, $4, $5, NULL, $6) RETURNING *`,
    values: [
      products,
      amount,
      addresses,
      orderNumber,
      payment,
      guestId,
    ],
  };
  return connection.query(sql);
};
export default addGuestOrderQuery;
