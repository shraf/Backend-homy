/* eslint-disable eqeqeq */
import { getProductsQuery } from '../../database/queries/index.js';
import { customizedError, filterSchema } from '../../utils/index.js';

const getProductsFilteredController = async (req, res, next) => {
  try {
    const { categoryId } = req.query;
    const {
      filter: {
        maxPrice, minPrice, brands, subCategory,
      },
    } = await filterSchema.validate(req.body, { abortEarly: false });
    const { rows } = await getProductsQuery();
    const categoryProducts = rows.filter((product) => product.category_id == categoryId);
    if (subCategory == 0 && brands.length == 0) {
      const filteredProducts = categoryProducts.filter(
        (product) => product.price <= maxPrice && product.price >= minPrice,
      );
      return res.json({
        message: 'Successfully retrieved products',
        status: 200,
        dataLength: filteredProducts.length,
        data: filteredProducts,
      });
    }
    const smallLettersBrands = brands.map((brand) => brand.toLowerCase());
    const filteredProducts = categoryProducts
      .filter(
        (product) => product.price >= minPrice && product.price <= maxPrice,
      )
      .filter((product) => {
        if (subCategory > 0) {
          return product.sub_category_id == subCategory;
        }
        return product;
      })
      .filter((product) => {
        if (brands.length > 0) {
          return smallLettersBrands.includes(product.brand.toLowerCase());
        }
        return product;
      });

    res.json({
      message: 'Successfully retrieved products',
      status: 200,
      dataLength: filteredProducts.length,
      data: filteredProducts,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default getProductsFilteredController;
