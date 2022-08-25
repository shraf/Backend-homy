import { addPromoCodeQuery, checkPromoCodeExistsQuery } from '../../database/queries/index.js';
import { customizedError, promoCodeSchema } from '../../utils/index.js';

const addPromoCodeController = async (req, res, next) => {
  try {
    const {
      name, discount,
    } = await promoCodeSchema.validate(req.body, { abortEarly: false });
    const { rowCount } = await checkPromoCodeExistsQuery(name.toLocaleLowerCase());
    if (rowCount) {
      throw customizedError(400, 'Promo Code Name already exists');
    }
    const { rows: data } = await addPromoCodeQuery(name, discount);
    res.status(201).json({
      message: 'You have been successfully added promo code',
      status: 201,
      data,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default addPromoCodeController;
