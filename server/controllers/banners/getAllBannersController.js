import { getAllBannersQuery } from '../../database/queries/index.js';

const getAllBannersController = async (req, res, next) => {
  try {
    const { rows: banners } = await getAllBannersQuery();
    res.json({ message: 'Successfully retrieved All Banners', data: banners });
  } catch (error) {
    next(error);
  }
};
export default getAllBannersController;
