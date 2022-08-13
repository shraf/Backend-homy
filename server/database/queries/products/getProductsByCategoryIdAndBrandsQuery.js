import connection from '../../config/connection.js';

const getProductsByCategoryIdAndBrandsQuery = (
  minPrice,
  maxPrice,
  page,
  categoryId,
  Brands,
) => {
  console.log(Brands)
  const sql = {
    text: `SELECT * FROM products WHERE price BETWEEN $1 AND $2 
    AND category_id=$4 AND LOWER(brand) IN ($5) LIMIT 4 OFFSET 4*($3-1)`,
    values: [minPrice, maxPrice, page, categoryId, Brands],
  };
  return connection.query(sql);
};
export default getProductsByCategoryIdAndBrandsQuery;
