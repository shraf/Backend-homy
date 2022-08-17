import connection from '../../config/connection.js';

const deleteBrandsQuery = (id) => {
  const sql = {
    text: 'DELETE FROM brands WHERE id = $1',
    values: [id],
  };
  return connection.query(sql);
};
export default deleteBrandsQuery;
