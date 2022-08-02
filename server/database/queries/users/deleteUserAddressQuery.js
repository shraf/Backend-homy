import connection from '../../config/connection.js';

const deleteUserAddressQuery = (id) => {
  const sql = {
    text: 'DELETE FROM addresses WHERE id = $1',
    values: [id],
  };
  return connection.query(sql);
};
export default deleteUserAddressQuery;
