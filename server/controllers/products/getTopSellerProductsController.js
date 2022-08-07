import { getProductsFromOrderQuery } from "../../database/queries/index.js";

const getTopSellerProductsController = async (req, res, next) => {
  try {
    const { rows } = await getProductsFromOrderQuery();
    const product = rows.map(({ products }) => products);
    let result = [];
    let result1 =[]
    for (let i = 0; i < product.length; i += 1) {
      for (let j = 0; j < product[i].length; j += 1) {
        const obj = {};
        if (result.includes(product[i][j][0])) {
            obj.productId = product[i][j][0];
            obj.quantity = product[i][j][1];
            result1.push(obj);
        } else {
          obj.productId = product[i][j][0];
          obj.quantity = product[i][j][1];
          result.push(product[i][j][0]);
          result1.push(obj);
        }
      }
    }
    const result2 = result1.filter(({ productId, quantity }) => productId === result1[0].productId);
    console.log(result2);
    console.log(result1);
    res.send(rows);
  } catch (error) {
    next(error);
  }
};

export default getTopSellerProductsController;
