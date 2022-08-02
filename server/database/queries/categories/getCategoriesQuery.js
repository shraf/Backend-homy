import connection from '../../config/connection.js';

const getCategoriesQuery = () => {
  const sql = {
    text: 'SELECT * FROM categories',
    values: [],
  };
  return connection.query(sql);
};
export default getCategoriesQuery;
