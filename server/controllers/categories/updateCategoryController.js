import { updateCategoryQuery } from '../../database/queries/index.js';
import { customizedError } from '../../utils/index.js';
import categorySchema from '../../utils/validation/categorySchema.js';

const updateCategoryController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name, image, place, hasSubCategories,
    } = await categorySchema.validate(req.body, { abortEarly: false });
    const { rows: data } = await updateCategoryQuery(name, image, place, hasSubCategories, id);
    res.json({
      message: 'You have been successfully updated category',
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

export default updateCategoryController;
