import { getCategoriesQuery } from '../../database/queries/index.js';

const getAllSubCategoriesController = async (req, res, next) => {
  try {
    const { archive } = req.query;
    if (archive) {
      const { rows } = await getCategoriesQuery(true);
      return res.json({
        message: 'You have been successfully archived categories',
        status: 200,
        data: rows,
      });
    }
    const { rows } = await getCategoriesQuery(false);
    res.json({
      message: 'You have been successfully not archived categories',
      status: 200,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

export default getAllSubCategoriesController;
