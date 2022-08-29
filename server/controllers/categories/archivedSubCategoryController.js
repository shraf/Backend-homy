import {
  archivedProductQuery,
  archivedSubCategoryQuery,
  getAllProductsBySubCategoryQuery,
} from '../../database/queries/index.js';

const global = async (subCategoryId, products, archivedValue) => {
  if (products.length > 0) {
    products.forEach(async ({ id: productId }) => {
      await archivedProductQuery(archivedValue, productId);
    });
  }
  const { rows } = await archivedSubCategoryQuery(archivedValue, subCategoryId);
  return rows;
};

const archivedSubCategoryController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { archive } = req.query;
    const { rows: products } = await getAllProductsBySubCategoryQuery(id);
    if (archive === 'true') {
      const result = await global(id, products, true);
      return res.json({
        message: 'You have been successfully archived sub-category',
        status: 200,
        data: result,
      });
    }
    const result = await global(id, products, false);
    res.json({
      message: 'You have been successfully not archived sub-category',
      status: 200,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default archivedSubCategoryController;
