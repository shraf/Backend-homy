import connection from '../../config/connection.js';

const deletePromoCodeQuery = (id) => {
  const sql = {
    text: 'DELETE FROM promo_codes WHERE id=$1 RETURNING *',
    values: [id],
  };
  return connection.query(sql);
};
export default deletePromoCodeQuery;
