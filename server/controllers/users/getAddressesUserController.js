// import { updateInfoUserQuery } from '../../database/queries/index.js';

const getAddressesUserController = async (req, res, next) => {
  res.json({ message: 'Successfully get user info', status: 200 });
  //   try {
  //     const { rows } = await getSubCategoriesQuery(categoryId);
  //     res.json({ message: 'Successfully retrieved all categories', status: 200, data: rows });
  //   } catch (error) {
  //     next(error);
  //   }
};

export default getAddressesUserController;
