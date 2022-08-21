import { deleteProductQuery } from '../../database/queries/index.js';

const deleteProductController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rows } = await deleteProductQuery(id);
    res.json({ message: 'Successfully delete product', status: 200, data: rows[0] });
  } catch (error) {
    next(error);
  }
};

export default deleteProductController;
