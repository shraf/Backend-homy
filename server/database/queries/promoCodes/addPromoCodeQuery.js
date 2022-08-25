import connection from '../../config/connection.js';

const addPromoCodeQuery = (name, discount) => {
  const sql = {
    text: 'INSERT INTO promo_codes (name,discount) VALUES ($1,$2) RETURNING *',
    values: [name, discount],
  };
  return connection.query(sql);
};
export default addPromoCodeQuery;
