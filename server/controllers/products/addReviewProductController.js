import { addReviewProductQuery } from '../../database/queries/index.js';
import { customizedError, reviewSchema } from '../../utils/index.js';

const addReviewProductController = async (req, res, next) => {
  const { id: userId } = req.user;
  const { productId } = req.params;
  try {
    const { comment, rate } = await reviewSchema.validate(req.body, { abortEarly: false });
    const { rows, rowCount } = await addReviewProductQuery(comment, rate, userId, productId);
    if (!rowCount) {
      throw (customizedError(400, 'Review not added Try Again Later'));
    }
    res.status(201).json({ message: 'Review added successfully', status: 201, data: rows });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default addReviewProductController;
