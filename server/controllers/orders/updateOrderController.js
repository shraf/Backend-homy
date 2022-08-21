import { updateOrderQuery } from '../../database/queries/index.js';
import { customizedError, statusSchema } from '../../utils/index.js';

const updateOrderController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = await statusSchema.validate(req.body, { abortEarly: false });
    const { rows } = await updateOrderQuery(status, id);
    res.json({ message: 'Successfully updated status for order', status: 200, data: rows });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default updateOrderController;
