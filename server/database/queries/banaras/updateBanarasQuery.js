import connection from '../../config/connection.js';

const updateBanarasQuery = (name, image, id) => {
  const sql = {
    text: 'UPDATE banaras SET name=$1, image=$2 WHERE id = $3',
    values: [name, image, id],
  };
  return connection.query(sql);
};
export default updateBanarasQuery;
