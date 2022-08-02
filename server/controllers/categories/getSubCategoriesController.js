import { getSubCategoriesQuery } from '../../database/queries/index.js';

const getSubCategoriesController = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const { rows } = await getSubCategoriesQuery(categoryId);
    res.json({ message: 'Successfully retrieved all categories', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getSubCategoriesController;
