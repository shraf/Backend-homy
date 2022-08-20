import { getAllSubCategoriesQuery } from '../../database/queries/index.js';

const getAllSubCategoriesController = async (req, res, next) => {
  try {
    const { archive } = req.query;
    if (archive) {
      const { rows } = await getAllSubCategoriesQuery(true);
      return res.json({
        message: 'You have been successfully archived sub-categories',
        status: 200,
        data: rows,
      });
    }
    const { rows } = await getAllSubCategoriesQuery(false);
    res.json({
      message: 'You have been successfully not archived sub-categories',
      status: 200,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

export default getAllSubCategoriesController;
