import connection from '../../config/connection.js';

const getProductsByPlaceQuery = (minPrice, maxPrice, page, place) => {
  const sql = {
    text: `SELECT products.id,products.name,products.image,products.albums, products.price,
     products.description, products.category_id,products.sub_category_id,
      products.brand,products.quick_overview,products.discount,products.inStock
     FROM products join categories ON products.category_id = categories.id 
    GROUP BY products.id, categories.id
    HAVING products.price >= $1 AND products.price <=$2 
    AND categories.place=$4 
    LIMIT 4 
    OFFSET 4*($3-1)`,
    values: [minPrice, maxPrice, page, place],
  };
  return connection.query(sql);
};
export default getProductsByPlaceQuery;
