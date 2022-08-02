import { getProductByIdQuery } from '../../database/queries/index.js';

const getProductByIdController = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const { rows } = await getProductByIdQuery(productId);
    res.json({ message: 'Successfully retrieved product', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getProductByIdController;
