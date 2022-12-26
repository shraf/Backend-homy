import { getProductByIdQuery, getProductsFromOrderQuery } from '../../database/queries/index.js';
import getTopSellingProductsQuery from '../../database/queries/products/getTopSellingProductsQuery.js';

const getTopSellerProductsController = async (req, res, next) => {
  try {
    const page = req.params.page
    const rows = await getTopSellingProductsQuery(page)
    res.status(200).json({
      message: 'Successfully fetched less than 10 top seller products',
      status: 200,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};



export default getTopSellerProductsController;
