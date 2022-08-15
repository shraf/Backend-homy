/* eslint-disable no-plusplus */
/* eslint-disable quotes */
/* eslint-disable prefer-template */
/* eslint-disable operator-linebreak */
/* eslint-disable space-infix-ops */
import connection from '../../config/connection.js';

const getProductsByCategoryIdAndBrandsQuery = (
  minPrice,
  maxPrice,
  page,
  categoryId,
  Brands,
) => {
  let count = 4;
  const b = Brands.map(() => {
    count++;
    return `$${count}`;
  });
  const sql = {
    text: "SELECT * FROM products WHERE price BETWEEN $1 AND $2 AND category_id=$4 AND LOWER(brand) IN ("+ b.join(",") +
    ") LIMIT 4 OFFSET 4*($3-1)",
    values: [minPrice, maxPrice, page, categoryId, ...Brands],
  };
  return connection.query(sql);
};
export default getProductsByCategoryIdAndBrandsQuery;
