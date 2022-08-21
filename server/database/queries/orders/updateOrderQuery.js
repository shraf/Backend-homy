import connection from '../../config/connection.js';

const updateOrderQuery = (status, id) => {
  const sql = {
    text: 'UPDATE orders SET status = $1 WHERE id = $2 RETURNING *',
    values: [status, id],
  };
  return connection.query(sql);
};
export default updateOrderQuery;
