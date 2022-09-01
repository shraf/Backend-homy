import connection from '../../config/connection.js';

const addUserOrderQuery = (
  products,
  amount,
  addresses,
  orderNumber,
  payment,
  promoDiscount,
  shippingCost,
  subTotal,
  userId,
) => {
  const sql = {
    text: `INSERT INTO orders
    (products, amount, addresses,order_number, payment,promo_discount,shipping_cost,sub_total,user_id, guest_id) 
    VALUES ($1, $2, $3, $4, $5,$6,$7,$8, $9, NULL) RETURNING *`,
    values: [
      products,
      amount,
      addresses,
      orderNumber,
      payment,
      promoDiscount,
      shippingCost,
      subTotal,
      userId,
    ],
  };
  return connection.query(sql);
};
export default addUserOrderQuery;
