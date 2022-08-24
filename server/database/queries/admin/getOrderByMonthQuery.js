import connection from '../../config/connection.js';

const getOrderByMonthQuery = () => {
  const sql = {
    text: `select createdAt,((SELECT EXTRACT(DAY FROM createdAt))) AS day
    FROM orders
    WHERE createdAt >= date_trunc('month', current_timestamp)
    AND createdAt < date_trunc('month', current_timestamp) + interval '1 month'
    ORDER BY day
            `,
    values: [],
  };
  return connection.query(sql);
};
export default getOrderByMonthQuery;
