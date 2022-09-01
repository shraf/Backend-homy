import connection from '../../config/connection.js';

const getProductByIdWithCategoryQuery = (productId) => {
  const sql = {
    text: 'SELECT p.name as productName, p.image as image, c.name as categoryName FROM products as p JOIN categories as c ON p.category_id = c.id WHERE p.id =$1 ',
    values: [productId],
  };
  return connection.query(sql);
};
export default getProductByIdWithCategoryQuery;
