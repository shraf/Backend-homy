import { getSingleProductReviewByIdQuery } from '../../database/queries/index.js';

const getSingleProductReviewController = async (req, res, next) => {
  try {
    const { page } = req.query;
    const { productId } = req.params;
    const { rows } = await getSingleProductReviewByIdQuery(productId, page);
    res.json({ message: 'Successfully retrieved product reviews ', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getSingleProductReviewController;
