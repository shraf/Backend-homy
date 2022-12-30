import queryBuilder from '../../config/queryBuilder.js';

const updateProductQuantityQuery = async (cart_id, product_id, quantity) => {
  await queryBuilder.where({
    cart_id,
    product_id
  })
    .update({
      quantity
    })
    .from('cart_product')
};
export default updateProductQuantityQuery;
