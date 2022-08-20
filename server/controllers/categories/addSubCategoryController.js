import { customizedError } from '../../utils/index.js';

const addSubCategoryController = async (req, res, next) => {
  try {

  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default addSubCategoryController;
