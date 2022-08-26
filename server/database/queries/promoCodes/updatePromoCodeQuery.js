import connection from '../../config/connection.js';

const updatePromoCodeQuery = (discount, id) => {
  const sql = {
    text: 'UPDATE promo_codes SET discount=$1 WHERE id=$2 RETURNING *',
    values: [discount, id],
  };
  return connection.query(sql);
};
export default updatePromoCodeQuery;
