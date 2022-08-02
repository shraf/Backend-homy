import { getUserAddressesQuery, updateAddressDefaultQuery } from '../../database/queries/index.js';
import { idAddressSchema, customizedError } from '../../utils/index.js';

const updateAddressDefaultController = async (req, res, next) => {
  try {
    const { id: idUser } = req.user;
    const { id: idAddress } = await idAddressSchema.validate(req.body, { abortEarly: false });
    const { rows: addresses } = await getUserAddressesQuery(idUser);
    const defaultAddress = addresses.filter((address) => address.default_address === true);
    if (defaultAddress.length > 0) {
      await updateAddressDefaultQuery(defaultAddress[0].id, false);
    }
    const { rows: newDefaultAddress } = await updateAddressDefaultQuery(idAddress, true);
    res.status(201).json({
      message: 'make address Default Successfully',
      newAddress: newDefaultAddress[0],
      status: 201,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default updateAddressDefaultController;
