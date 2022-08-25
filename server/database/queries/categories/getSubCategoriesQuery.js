import connection from '../../config/connection.js';

const getSubCategoriesQuery = (categoryId) => {
  const sql = {
    text: `SELECT sub.id,sub.name,sub.archived, sub.category_id,sub.createdAt, c.name as categoryName FROM sub_categories as sub JOIN categories as c ON sub.category_id=c.id WHERE sub.category_id =$1 AND
     sub.archived = FALSE AND c.archived = FALSE`,
    values: [categoryId],
  };
  return connection.query(sql);
};
export default getSubCategoriesQuery;
