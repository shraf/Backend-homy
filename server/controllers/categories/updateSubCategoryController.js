
import { updateSubCategoryQuery } from '../../database/queries/index.js';
import { customizedError, subCategorySchema } from '../../utils/index.js';

const updateSubCategoryController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name, categoryId,
    } = await subCategorySchema.validate(req.body, { abortEarly: false });
    const { rows: data } = await updateSubCategoryQuery(name, categoryId, id);
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

export default updateSubCategoryController;
