import { getBannersQuery } from '../../database/queries/index.js';

const getBannersController = async (req, res, next) => {
  try {
    const { rows: banners } = await getBannersQuery();
    res.json({ message: 'Successfully retrieved Banners', data: banners });
  } catch (error) {
    next(error);
  }
};
export default getBannersController;
