import connection from '../../config/connection.js';

const getCategoryByIdQuery = (id) => {
  const sql = {
    text: 'SELECT * FROM categories WHERE id = $1',
    values: [id],
  };
  return connection.query(sql);
};
export default getCategoryByIdQuery;
