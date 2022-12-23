import { getCategoriesQuery } from '../../database/queries/index.js';

const getCategoriesController = async (req, res, next) => {
  try {
    const page = req.query.page || 1;
    const  rows = await getCategoriesQuery(false);
    return res.json(rows);
  } catch (error) {
    next(error);
  }
};

export default getCategoriesController;
