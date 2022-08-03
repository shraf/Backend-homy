import connection from '../../config/connection.js';

const getSuperDealsQuery = () => {
  const sql = {
    text: 'SELECT * from products WHERE discount >= 50',
    values: [],
  };
  return connection.query(sql);
};
export default getSuperDealsQuery;
