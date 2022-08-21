import { deleteSubCategoryQuery, getAllSubCategoriesByCategoryIdQuery, getCategoryByIdQuery, updateCategoryQuery } from '../../database/queries/index.js';
import { customizedError } from '../../utils/index.js';

const deleteSubCategoryController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rows, rowCount } = await deleteSubCategoryQuery(id);
    if (!rowCount) {
      throw customizedError(400, 'There have error try again later');
    }
    const { category_id: categoryId } = rows[0];
    const { rows: subCategories } = await getAllSubCategoriesByCategoryIdQuery(categoryId);
    if (!subCategories.length) {
      const { rows: categoryInfo } = await getCategoryByIdQuery(categoryId);
      const {
        name,
        image,
        place,
      } = categoryInfo[0];
      const { rows: updatedCategories } = await updateCategoryQuery(
        name,
        image,
        place,
        false,
        categoryId,
      );
      if (!updatedCategories.length) {
        throw customizedError(400, 'try again later');
      }
    }
    res.json({ message: 'Successfully delete sub-category', status: 200, data: rows[0] });
  } catch (error) {
    next(error);
  }
};

export default deleteSubCategoryController;
