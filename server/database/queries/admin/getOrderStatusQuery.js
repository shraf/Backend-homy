import connection from '../../config/connection.js';

const getOrderStatusQuery = () => {
  const sql = {
    text: ` SELECT
    (SELECT count(id) FROM orders)As allTotal,count(status) as total, status
    FROM
    orders GROUP BY status`,
    values: [],
  };
  return connection.query(sql);
};
export default getOrderStatusQuery;
