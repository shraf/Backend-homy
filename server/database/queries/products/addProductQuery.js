import connection from '../../config/connection.js';

const addProductQuery = (
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
) => {
  const sql = {
    text: `INSERT INTO products
    (name,price,image,albums,description,quick_overview,discount,shipment,
    brand,in_stock,sub_category_id,category_id)
     VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *`,
    values: [name, price, image, albums, description, quickOverview,
      discount, shipment, brand, inStock, subCategoryId,
      categoryId],
  };
  return connection.query(sql);
};
export default addProductQuery;
