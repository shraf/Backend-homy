/* eslint-disable prefer-template */
/* eslint-disable operator-linebreak */
/* eslint-disable no-plusplus */
import connection from '../../config/connection.js';

const getProductsByPlaceANDBrandsQuery = (
  minPrice,
  maxPrice,
  page,
  place,
  Brands,
) => {
  let count = 4;
  const b = Brands.map(() => {
    count++;
    return `$${count}`;
  });
  const sql = {
    text:
      `SELECT products.id,products.name,products.image,products.albums, products.price,
    products.description, products.category_id,products.sub_category_id,
     products.brand,products.quick_overview,products.discount,products.inStock
    FROM products join categories ON products.category_id = categories.id 
   GROUP BY products.id, categories.id
   HAVING products.price BETWEEN $1 AND $2
   AND categories.place=$4 AND LOWER(products.brand)IN(` +
      b.join(',') +
      ') LIMIT 4 OFFSET 4*($3-1) ',
    values: [minPrice, maxPrice, page, place, ...Brands],
  };
  return connection.query(sql);
};
export default getProductsByPlaceANDBrandsQuery;
