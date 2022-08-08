import { getProductsFromOrderQuery } from '../../database/queries/index.js';

const getTopSellerProductsController = async (req, res, next) => {
  try {
    const { rows } = await getProductsFromOrderQuery();
    const product = rows.map(({ products }) => products);
    let products = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const element of product) {
      products = [...products, ...element];
    }
    const count = {};
    products.forEach((i) => {
      // eslint-disable-next-line radix
      count[i[0]] = (count[i[0]] || 0) + parseInt(i[1]);
    });
    const findHighest = (obj, num = 1) => {
      const requiredObj = {};
      if (num > Object.keys(obj).length) {
        return false;
      }
      Object.keys(obj)
        .sort((a, b) => obj[b] - obj[a])
        .forEach((key, ind) => {
          if (ind < num) {
            requiredObj[key] = obj[key];
          }
        });
      return requiredObj;
    };
    if (Object.keys(count).length >= 20) {
      const topSellerProducts = findHighest(count, 20);
      res.json({
        message: 'Successfully fetched 20 top seller products',
        status: 200,
        data: topSellerProducts,
      });
    } else if (
      Object.keys(count).length >= 10 && Object.keys(count).length < 20
    ) {
      const topSellerProducts = findHighest(count, 10);
      res.status(200).json({
        message: 'Successfully fetched 10 top seller products',
        status: 200,
        data: topSellerProducts,
      });
    } else {
      const topSellerProducts = findHighest(count, Object.keys(count).length);
      res.status(200).json({
        message: 'Successfully fetched less than 10 top seller products',
        status: 200,
        data: topSellerProducts,
      });
    }
  } catch (error) {
    next(error);
  }
};

export default getTopSellerProductsController;
