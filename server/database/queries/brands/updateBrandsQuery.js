import connection from '../../config/connection.js';

const updateBrandsQuery = (name, image, id) => {
  const sql = {
    text: 'UPDATE brands SET name=$1, image=$2 WHERE id = $3 RETURNING *',
    values: [name, image, id],
  };
  return connection.query(sql);
};
export default updateBrandsQuery;
