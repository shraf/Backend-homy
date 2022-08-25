import {
  archivedProductQuery,
} from '../../database/queries/index.js';

const archivedProductController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { archive } = req.query;
    if (archive) {
      const { rows } = await archivedProductQuery(true, id);
      return res.json({
        message: 'You have been successfully archived product',
        status: 200,
        data: rows,
      });
    }
    const { rows } = await archivedProductQuery(false, id);
    res.json({
      message: 'You have been successfully not archived product',
      status: 200,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

export default archivedProductController;
