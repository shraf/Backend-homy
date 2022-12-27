import { getProductByIdQuery, getProductsFromOrderQuery } from '../../database/queries/index.js';
import getTopSellingProductsQuery from '../../database/queries/products/getTopSellingProductsQuery.js';

const getTopSellerProductsController = async (req, res, next) => {
  try {
    const { page, per_page, category_id, brand, name, min, max } = req.query
    const rows = await getTopSellingProductsQuery({page, per_page}, {
      category_id,
      brand,
      name,
      price: {
        min, max
      }
    })
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
