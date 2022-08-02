import connection from '../../config/connection.js';

const getUserAddressesQuery = (id) => {
  const sql = {
    text: 'SELECT * FROM addresses WHERE user_id =$1',
    values: [id],
  };
  return connection.query(sql);
};
export default getUserAddressesQuery;
