import { deletePromoCodeQuery } from '../../database/queries/index.js';

const deletePromoCodeController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rows } = await deletePromoCodeQuery(id);
    res.json({ message: 'Successfully deleted Promo Code', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default deletePromoCodeController;
