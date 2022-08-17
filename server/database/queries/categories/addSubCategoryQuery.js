import connection from '../../config/connection.js';

const addCategoryQuery = (name, image, place, hasSubCategories) => {
  const sql = {
    text: 'INSERT INTO categories(name,image,place,has_Sub_Categories) VALUES($1,$2,$3,$4) RETURNING *',
    values: [name, image, place, hasSubCategories],
  };
  return connection.query(sql);
};
export default addCategoryQuery;