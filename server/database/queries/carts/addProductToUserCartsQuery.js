import connection from '../../config/connection.js';
import queryBuilder from '../../config/queryBuilder.js';

const addProductToUserCartsQuery = (cart_id, product_id, quantity,) => {
  queryBuilder.insert({
    cart_id,
    product_id,
    quantity,
  })
  .into('cart_product');



};


export default addProductToUserCartsQuery;
