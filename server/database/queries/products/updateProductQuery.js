import connection from '../../config/connection.js';

const updateProductQuery = (
  name,
  price,
  image,
  albums,
  description,
  quickOverview,
  discount,
  shipment,
  brand,
  inStock,
  subCategoryId,
  categoryId,
  id,
) => {
  const sql = {
    text: `UPDATE products SET name = $1, price = $2, image = $3, albums = $4, description = $5,
     quick_overview = $6, discount = $7, shipment = $8, brand = $9, inStock = $10, subCategoryId = $11,
    categoryId = $12 WHERE id = $13`,
    values: [name, price, image, albums, description, quickOverview,
      discount, shipment, brand, inStock, subCategoryId,
      categoryId, id],
  };
  return connection.query(sql);
};
export default updateProductQuery;
