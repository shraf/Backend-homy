import { getSuperDealsQuery } from '../../database/queries/index.js';

const getSuperDealsController = async (req, res, next) => {
  try {
    const { rows } = await getSuperDealsQuery();
    res.json({ message: 'Successfully retrieved super deals products ', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getSuperDealsController;
