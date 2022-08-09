import connection from '../../config/connection.js';

const addProductToUserCartsQuery = (userId, productId, quantity) => {
  const sql = {
    text: 'INSERT INTO carts(user_id ,product_id,quantity) VALUES($1,$2,$3) RETURNING *',
    values: [userId, productId, quantity],
  };
  return connection.query(sql);
};
export default addProductToUserCartsQuery;
