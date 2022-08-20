
import { customizedError } from '../../utils/index.js';

const updateSubCategoryController = async (req, res, next) => {
  try {
    const { id } = req.params;

  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default updateSubCategoryController;
