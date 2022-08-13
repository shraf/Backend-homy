import connection from '../../config/connection.js';

const getProductsByCategoryIdAndSubCategoryQuery = (
  minPrice,
  maxPrice,
  page,
  categoryId,
  subCategory,
) => {
  const sql = {
    text: `SELECT * FROM products WHERE price BETWEEN $1 AND $2 
    AND category_id=$4 AND sub_category_id=$5 LIMIT 4 OFFSET 4*($3-1)`,
    values: [minPrice, maxPrice, page, categoryId, subCategory],
  };
  return connection.query(sql);
};
export default getProductsByCategoryIdAndSubCategoryQuery;
