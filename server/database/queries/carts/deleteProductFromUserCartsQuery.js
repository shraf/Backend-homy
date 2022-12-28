import queryBuilder from '../../config/queryBuilder.js';

const deleteProductFromUserCartQuery = async(cart_id, product_id) => {
  await queryBuilder
  .from('cart_product')
  .where({cart_id, product_id})
  .delete()
};
export default deleteProductFromUserCartQuery;
