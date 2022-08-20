import { deleteCategoryQuery } from '../../database/queries/index.js';
import { customizedError } from '../../utils/index.js';

const deleteCategoryController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rows, rowCount } = await deleteCategoryQuery(id);
    if (!rowCount) {
      throw customizedError(400, 'There have error try again later');
    }
    res.json({ message: 'Successfully delete category', status: 200, data: rows[0] });
  } catch (error) {
    next(error);
  }
};

export default deleteCategoryController;
