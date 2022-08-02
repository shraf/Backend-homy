import { getCollectReviewForProductQuery } from '../../database/queries/index.js';

const getCollectReviewProductController = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const { rows } = await getCollectReviewForProductQuery(productId);
    res.json({ message: 'Successfully retrieved product rates ', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getCollectReviewProductController;
