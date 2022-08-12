import connection from '../../config/connection.js';

const getProductsByCategoryIdAndBrandsQuery = (
  minPrice,
  maxPrice,
  page,
  categoryId,
  smallLettersBrands,
) => {
  console.log(smallLettersBrands)
  const sql = {
    text: `SELECT * FROM products WHERE price >= $1 AND price <=$2 
    AND category_id=$4 AND sub_category_id=$5 AND LOWER(brand) $5 LIMIT 4 OFFSET 4*($3-1)`,
    values: [minPrice, maxPrice, page, categoryId, smallLettersBrands],
  };
  return connection.query(sql);
};
export default getProductsByCategoryIdAndBrandsQuery;
