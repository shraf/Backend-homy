import { getProductByIdQuery, getProductsFromOrderQuery } from '../../database/queries/index.js';

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
    let topSellerProductsIds = [];
    if (dashboard) {
      topSellerProductsIds = sorted.slice(0, 10);
    }
    if (Object.keys(count).length >= 20) {
      topSellerProductsIds = sorted.slice(0, 20);
    } else if (
      Object.keys(count).length >= 10 && Object.keys(count).length < 20
    ) {
      topSellerProductsIds = sorted.slice(0, 10);
    } else {
      topSellerProductsIds = sorted.slice(0, Object.keys(count).length);
    }
    const finalTopSellerProducts = [];
    const topSellerProducts = topSellerProductsIds.map(async (topProduct) => {
      const { rows: productById } = await getProductByIdQuery(Number(topProduct[0]));
      return { ...productById[0], quantity: topProduct[1] };
    });
    await Promise.all(topSellerProducts).then((sellerProducts) => {
      sellerProducts.forEach((productItem) => {
        finalTopSellerProducts.push(productItem);
      });
    }).catch((error) => {
      next(error);
    });
    res.status(200).json({
      message: 'Successfully fetched less than 10 top seller products',
      status: 200,
      data: finalTopSellerProducts,
    });
  } catch (error) {
    next(error);
  }
};

export default getTopSellerProductsController;
