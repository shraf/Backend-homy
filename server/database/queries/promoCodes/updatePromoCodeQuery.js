import connection from '../../config/connection.js';

const updatePromoCodeQuery = (name, discount, id) => {
  const sql = {
    text: 'UPDATE promo_codes SET name=$1,discount=$2 WHERE id=$3 RETURNING *',
    values: [name, discount, id],
  };
  return connection.query(sql);
};
export default updatePromoCodeQuery;
