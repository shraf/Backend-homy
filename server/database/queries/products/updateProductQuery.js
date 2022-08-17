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
    text: `UPDATE `,
    values: [name, price, image, albums, description, quickOverview,
      discount, shipment, brand, inStock, subCategoryId,
      categoryId, id],
  };
  return connection.query(sql);
};
export default updateProductQuery;