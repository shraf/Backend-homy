import { addCategoryQuery } from '../../database/queries/index.js';
import { customizedError } from '../../utils/index.js';
import categorySchema from '../../utils/validation/categorySchema.js';

const addSubCategoryController = async (req, res, next) => {
  try {
    const {
      name, image, place, hasSubCategories,
    } = await categorySchema.validate(req.body, { abortEarly: false });
    const { rows: data } = await addCategoryQuery(name, image, place, hasSubCategories);
    res.status(201).json({
      message: 'You have been successfully added category',
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

export default addSubCategoryController;
