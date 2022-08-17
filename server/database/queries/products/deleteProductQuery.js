import connection from '../../config/connection.js';

const deleteProductQuery = (id) => {
  const sql = {
    text: 'DELETE FROM products WHERE id=$1',
    values: [id],
  };
  return connection.query(sql);
};
export default deleteProductQuery;
