import connection from '../../config/connection.js';

const checkPromoCodeExistsQuery = (name) => {
  const sql = {
    text: 'SELECT name,discount,id FROM promo_codes WHERE LOWER(name) =$1',
    values: [name],
  };
  return connection.query(sql);
};
export default checkPromoCodeExistsQuery;
