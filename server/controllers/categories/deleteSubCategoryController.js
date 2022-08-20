import { deleteSubCategoryQuery } from '../../database/queries/index.js';
import { customizedError } from '../../utils/index.js';

const deleteSubCategoryController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rows, rowCount } = await deleteSubCategoryQuery(id);
    if (!rowCount) {
      throw customizedError(400, 'There have error try again later');
    }
    res.json({ message: 'Successfully delete sub-category', status: 200, data: rows[0] });
  } catch (error) {
    next(error);
  }
};

export default deleteSubCategoryController;
