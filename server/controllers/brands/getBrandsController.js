import { getBrandsQuery } from '../../database/queries/index.js';

const getBrandsController = async (req, res, next) => {
  try {
    const { rows: brands } = await getBrandsQuery();
    res.json({ message: 'Successfully retrieved Brands', data: brands });
  } catch (error) {
    next(error);
  }
};

export default getBrandsController;
