import connection from '../../config/connection.js';

const getPromoCodesQuery = () => {
  const sql = {
    text: 'SELECT name,discount,id FROM promo_codes ORDER BY id DESC',
    values: [],
  };
  return connection.query(sql);
};
export default getPromoCodesQuery;
