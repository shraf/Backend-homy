import connection from '../../config/connection.js';

const updateUserAddressQuery = (city, area, street, block, building, id) => {
  const sql = {
    text: `UPDATE addresses
    SET city= $1,
        area = $2,
        street = $3,
        block = $4,
        building = $5
    WHERE id = $6
    RETURNING *`,
    values: [city, area, street, block, building, id],
  };
  return connection.query(sql);
};
export default updateUserAddressQuery;
