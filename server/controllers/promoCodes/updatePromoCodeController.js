import { updatePromoCodeQuery } from '../../database/queries/index.js';
import { customizedError, discountSchema } from '../../utils/index.js';

const updatePromoCodeController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      discount,
    } = await discountSchema.validate(req.body, { abortEarly: false });
    const { rows: data } = await updatePromoCodeQuery(discount, id);
    res.json({
      message: 'You have been successfully updated promo code',
      status: 200,
      data,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default updatePromoCodeController;
