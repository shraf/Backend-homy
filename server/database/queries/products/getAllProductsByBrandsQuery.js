/* eslint-disable prefer-template */
/* eslint-disable operator-linebreak */
/* eslint-disable no-plusplus */
import connection from '../../config/connection.js';

const getAllProductsByBrandsQuery = (minPrice, maxPrice, page,Brands) => {
  let count = 3;
  const b = Brands.map(() => {
    count++;
    return `$${count}`;
  });
  const sql = {
    text: 'SELECT * FROM products WHERE price BETWEEN $1 AND $2 AND LOWER(brand)IN('
    + b.join(',') +
    ') LIMIT 4 OFFSET 4*($3-1) ',
    values: [minPrice, maxPrice, page, ...Brands],
  };
  return connection.query(sql);
};
export default getAllProductsByBrandsQuery;
