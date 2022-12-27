import { getProductByIdQuery, getProductsFromOrderQuery } from '../../database/queries/index.js';
import getTopSellingProductsQuery from '../../database/queries/products/getTopSellingProductsQuery.js';

const getTopSellerProductsController = async (req, res, next) => {
  try {
    const {category_id, page} = req.query
    const rows = await getTopSellingProductsQuery(page, category_id)
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
