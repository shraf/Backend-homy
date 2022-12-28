import connection from '../../config/connection.js';
import queryBuilder from '../../config/queryBuilder.js';

const addProductToUserCartsQuery = async (cart_id, product_id, quantity,) => {
  await queryBuilder.insert({
    cart_id,
    product_id,
    quantity,
  })
    .into('cart_product');
};


export default addProductToUserCartsQuery;
