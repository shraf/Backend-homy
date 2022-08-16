import { getCategoryByIdQuery } from '../../database/queries/index.js';

const getCategoryByIdController = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const { rows } = await getCategoryByIdQuery(categoryId);
    res.json({ message: 'Successfully retrieved Single category', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getCategoryByIdController;
