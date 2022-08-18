import { addCategoryQuery } from '../../database/queries/index.js';
import { customizedError } from '../../utils/index.js';
import categorySchema from '../../utils/validation/categorySchema.js';

const addCategoryController = async (req, res, next) => {
  try {
    const {
      name, image, place,
    } = await categorySchema.validate(req.body, { abortEarly: false });
    let { hasSubCategories } = await categorySchema.validate(req.body, { abortEarly: false });
    if (hasSubCategories === undefined) {
      hasSubCategories = 'FALSE';
    }
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

export default addCategoryController;
