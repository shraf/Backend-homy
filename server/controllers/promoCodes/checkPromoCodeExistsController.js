import { checkPromoCodeExistsQuery } from '../../database/queries/index.js';
import { customizedError } from '../../utils/index.js';

const checkPromoCodeExistsController = async (req, res, next) => {
  try {
    const { name } = req.params;
    const { rows } = await checkPromoCodeExistsQuery(name.toLocaleLowerCase());
    res.json({
      message: 'You have been successfully retrieved promo code',
      status: 200,
      data: rows,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default checkPromoCodeExistsController;
