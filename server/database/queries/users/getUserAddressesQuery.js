import connection from '../../config/connection.js';

const getUserAddressesQuery = (id) => {
  const sql = {
    text: 'SELECT id,city,area,block,building,default_address,user_id,street FROM addresses WHERE user_id =$1 ORDER BY id DESC',
    values: [id],
  };
  return connection.query(sql);
};
export default getUserAddressesQuery;
