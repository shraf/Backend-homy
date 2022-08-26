import connection from '../../config/connection.js';

const getCategoriesQuery = (archive) => {
  const sql = {
    text: 'SELECT * FROM categories WHERE archived=$1 ORDER BY id DESC',
    values: [archive],
  };
  return connection.query(sql);
};
export default getCategoriesQuery;
