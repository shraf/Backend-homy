import connection from '../../config/connection.js';

const updateCategoryQuery = (name, image, place, hasSubCategories, id) => {
  const sql = {
    text: 'UPDATE categories SET name=$1, image=$2, place=$3, has_Sub_Categories=$4 WHERE id=$5',
    values: [name, image, place, hasSubCategories, id],
  };
  return connection.query(sql);
};
export default updateCategoryQuery;
