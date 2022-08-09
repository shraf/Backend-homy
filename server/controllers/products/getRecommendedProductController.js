import { getRecommendedProductQuery } from '../../database/queries/index.js';

const getRecommendedProductController = async (req, res, next) => {
  try {
    const { categoriesId } = req.params;
    const { rows } = await getRecommendedProductQuery(categoriesId);
    res.json({ message: 'Successfully retrieved product', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getRecommendedProductController;
