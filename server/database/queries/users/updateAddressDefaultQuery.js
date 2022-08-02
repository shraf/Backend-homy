import connection from '../../config/connection.js';

const updateAddressDefaultQuery = (id, value) => {
  const sql = {
    text: `UPDATE addresses
    SET default_address=$2
    WHERE id = $1
    RETURNING *`,
    values: [id, value],
  };
  return connection.query(sql);
};
export default updateAddressDefaultQuery;
