import {
  addSubCategoryQuery,
  getCategoryByIdQuery,
  updateCategoryQuery,
} from '../../database/queries/index.js';
import { customizedError, subCategorySchema } from '../../utils/index.js';

const addSubCategoryController = async (req, res, next) => {
  try {
    const { name: subCategoriesName, categoryId } = await subCategorySchema.validate(
      req.body,
      { abortEarly: false },
    );
    const { rows } = await getCategoryByIdQuery(categoryId);
    if (!rows.length) {
      throw customizedError(400, 'There is no category by this id');
    }
    const {
      name,
      image,
      place,
      has_sub_categories: hasSubCategories,
    } = rows[0];
    if (hasSubCategories === false) {
      const { rows: updatedCategories } = await updateCategoryQuery(
        name,
        image,
        place,
        true,
        categoryId,
      );
      if (!updatedCategories.length) {
        throw customizedError(400, 'try again later');
      }
    }
    const { rows: data } = await addSubCategoryQuery(
      subCategoriesName,
      categoryId,
    );
    res.status(201).json({
      message: 'You have been successfully added sub-category',
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
