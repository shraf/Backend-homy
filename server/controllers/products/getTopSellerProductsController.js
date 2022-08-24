import { getProductsFromOrderQuery } from '../../database/queries/index.js';

const getTopSellerProductsController = async (req, res, next) => {
  try {
    const { dashboard } = req.query;
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
    const sorted = Object.entries(count)
      .sort(([, a], [, b]) => b - a);
    if (dashboard) {
      const topSellerProducts = sorted.slice(0, 10);
      return res.status(200).json({
        message: 'Successfully fetched less than 10 top seller products for dashboard',
        status: 200,
        data: topSellerProducts,
      });
    }
    if (Object.keys(count).length >= 20) {
      const topSellerProducts = sorted.slice(0, 20);
      res.json({
        message: 'Successfully fetched 20 top seller products',
        status: 200,
        data: topSellerProducts,
      });
    } else if (
      Object.keys(count).length >= 10 && Object.keys(count).length < 20
    ) {
      const topSellerProducts = sorted.slice(0, 10);
      res.status(200).json({
        message: 'Successfully fetched 10 top seller products',
        status: 200,
        data: topSellerProducts,
      });
    } else {
      const topSellerProducts = sorted.slice(0, Object.keys(count).length);
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
