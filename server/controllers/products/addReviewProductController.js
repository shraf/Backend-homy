import {
  addReviewProductQuery,
  getProductByIdQuery,
} from '../../database/queries/index.js';
import updateProductRatingQuery from '../../database/queries/products/updateProductRatingQuery.js';
import { customizedError, reviewSchema } from '../../utils/index.js';

const addReviewProductController = async (req, res, next) => {
  const { id: userId } = req.user;
  const { productId } = req.params;
  try {
    const { comment, rate } = await reviewSchema.validate(req.body, {
      abortEarly: false,
    });
    const { rows, rowCount } = await addReviewProductQuery(
      comment,
      rate,
      userId,
      productId,
    );
    if (!rowCount) {
      throw customizedError(400, 'Review not added Try Again Later');
    }
    const { rows: product } = await getProductByIdQuery(rows[0].product_id);
    const rating = product[0].rating + rate;
    const usersRatedNumber = product[0].users_rated_number + 1;
    const { rows: UpdatedRatingProduct } = await updateProductRatingQuery(
      rating,
      usersRatedNumber,
      productId,
    );
    res
      .status(201)
      .json({
        message: 'Review added successfully',
        status: 201,
        data: rows,
        product: UpdatedRatingProduct,
      });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default addReviewProductController;
