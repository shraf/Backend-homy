import { getPagesQuery } from '../../database/queries/index.js';

const getPagesController = async (req, res, next) => {
  try {
    const { rows } = await getPagesQuery();
    res.json({ message: 'Successfully retrieved All Pages ', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getPagesController;
