import connection from '../../config/connection.js';

const getAllSubCategoriesQuery = (archive) => {
  const sql = {
    text: `SELECT sub.id,sub.name as subCategoryName,sub.archived, sub.category_id,sub.createdAt,
     c.name as categoryName FROM sub_categories as sub JOIN categories as c ON sub.category_id=c.id
      WHERE sub.archived=$1 ORDER BY sub.id DESC`,
    values: [archive],
  };
  return connection.query(sql);
};
export default getAllSubCategoriesQuery;
