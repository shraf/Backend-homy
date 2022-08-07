import { getProductsQuery } from '../../database/queries/index.js';

const getProductsByNameController = async (req, res, next) => {
  try {
    const { productName } = req.query;
    const { rows } = await getProductsQuery();
    const products = rows.filter((product) => product.name.toLowerCase().includes(productName.toLowerCase()));
    res.json({
      message: 'Successfully retrieved products ',
      status: 200,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

export default getProductsByNameController;
