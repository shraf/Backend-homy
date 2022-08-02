import connection from '../../config/connection.js';

const addUserAddressQuery = (city, area, street, block, building, userId) => {
  const sql = {
    text: 'INSERT INTO addresses(city, area, street, block,building,user_id) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',
    values: [city, area, street, block, building, userId],
  };
  return connection.query(sql);
};
export default addUserAddressQuery;
