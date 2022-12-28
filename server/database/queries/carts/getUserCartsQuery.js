import connection from '../../config/connection.js';
import queryBuilder from '../../config/queryBuilder.js';

const getUserCartsQuery = (userId) => {
  const sql = {
    text: 'SELECT * FROM carts WHERE user_id = $1 ORDER BY createdAt DESC',
    values: [userId],
  };
  return connection.query(sql);
};

export const getUserCartQuery = async userId => {
  const rows = await queryBuilder.select(['products.*', 'categories.name as category_name'])
    .sum(queryBuilder.raw('quantity * price'))
    .from('cart_product')
    .innerJoin('products', 'product_id', '=', 'products.id')
    .innerJoin('categories', 'categories.id', '=', 'category_id')
    .innerJoin('cart', 'cart.id', '=', 'cart_product.cart_id')
    .where('cart.user_id', 14)
    .groupBy('products.id', 'categories.name');
  
  return rows
  }

export const getAvailableCartsQuery = async (userId) => {
  const cart = await queryBuilder.select()
    .from('cart')
    .where({ is_sold: false })
    .first()
  return cart
}
export default getUserCartsQuery;
