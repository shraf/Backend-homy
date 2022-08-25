import { getPromoCodesQuery } from '../../database/queries/index.js';

const getPromoCodesController = async (req, res, next) => {
  try {
    const { rows } = await getPromoCodesQuery();
    res.json({ message: 'Successfully retrieved All Promo Codes ', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getPromoCodesController;
