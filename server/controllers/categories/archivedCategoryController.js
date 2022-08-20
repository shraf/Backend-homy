import {
  archivedCategoryQuery,
  archivedProductQuery,
  archivedSubCategoryQuery,
  getAllProductsByCategoryIdQuery,
  getAllSubCategoriesByCategoryIdQuery,
} from '../../database/queries/index.js';

const global = async (categoryId, subCategories, products, archivedValue) => {
  if (products.length > 0) {
    products.forEach(async ({ id: productId }) => {
      await archivedProductQuery(archivedValue, productId);
    });

    if (subCategories.length > 0) {
      subCategories.forEach(async ({ id: subCategoriesId }) => {
        await archivedSubCategoryQuery(archivedValue, subCategoriesId);
      });
    }
  }
  const { rows } = await archivedCategoryQuery(archivedValue, categoryId);
  return rows;
};

const archivedCategoryController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { archive } = req.query;
    const { rows: subCategories } = await getAllSubCategoriesByCategoryIdQuery(id);
    const { rows: products } = await getAllProductsByCategoryIdQuery(id);
    if (archive) {
      const result = await global(id, subCategories, products, true);
      return res.json({
        message: 'You have been successfully archived category',
        status: 200,
        data: result,
      });
    }
    const result = await global(id, subCategories, products, false);
    res.json({
      message: 'You have been successfully not archived category',
      status: 200,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default archivedCategoryController;
