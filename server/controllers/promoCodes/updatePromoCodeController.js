import { checkPromoCodeExistsQuery, updatePromoCodeQuery } from '../../database/queries/index.js';
import { customizedError, promoCodeSchema } from '../../utils/index.js';

const updatePromoCodeController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name, discount,
    } = await promoCodeSchema.validate(req.body, { abortEarly: false });
    const { rowCount } = await checkPromoCodeExistsQuery(name.toLocaleLowerCase());
    if (rowCount) {
      throw customizedError(400, 'Promo Code Name already exists');
    }
    const { rows: data } = await updatePromoCodeQuery(name, discount, id);
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
