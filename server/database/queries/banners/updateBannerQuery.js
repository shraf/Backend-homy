import connection from '../../config/connection.js';

const updateBannerQuery = (name, image, id) => {
  const sql = {
    text: 'UPDATE banners SET name=$1, image=$2 WHERE id = $3 RETURNING *',
    values: [name, image, id],
  };
  return connection.query(sql);
};
export default updateBannerQuery;
