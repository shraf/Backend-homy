import { getProductsQuery } from '../../database/queries/index.js';

const getAllProductsController = async (req, res, next) => {
  try {
    const { archive } = req.query;
    if (archive) {
      const { rows } = await getProductsQuery(true);
      return res.json({
        message: 'You have been successfully archived products',
        status: 200,
        data: rows,
      });
    }
    const { rows } = await getProductsQuery(false);
    res.json({
      message: 'You have been successfully not archived products',
      status: 200,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

export default getAllProductsController;
