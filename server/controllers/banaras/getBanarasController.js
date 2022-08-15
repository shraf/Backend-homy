import { getBanarasQuery } from '../../database/queries/index.js';

const getBanarasController = async (req, res, next) => {
  try {
    const { rows: brands } = await getBanarasQuery();
    res.json({ message: 'Successfully retrieved Banaras', data: brands });
  } catch (error) {
    next(error);
  }
};
export default getBanarasController;
