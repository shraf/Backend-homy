/* eslint-disable eqeqeq */
import {
  getAllProductsByBrandsQuery,
  getAllProductsQuery,
  getProductsByCategoryIdAndBrandsQuery,
  getProductsByCategoryIdAndSubCategoryAndBrandsQuery,
  getProductsByCategoryIdAndSubCategoryQuery,
  getProductsByCategoryIdQuery,
  getProductsByPlaceANDBrandsQuery,
  getProductsByPlaceQuery,
} from '../../database/queries/index.js';
import { customizedError, filterSchema } from '../../utils/index.js';

const getProductsFilteredController = async (req, res, next) => {
  try {
    const { categoryId, page, place } = req.query;
    const {
      filter: { maxPrice, minPrice, brands, subCategory },
    } = await filterSchema.validate(req.body, { abortEarly: false });
    const smallLettersBrands = brands?.map((brand) => brand.toLowerCase());
    if (categoryId == undefined && subCategory == 0) {
      if (place == 'all' && brands.length == 0) {
        const { rows: allProducts } = await getAllProductsQuery(
          minPrice,
          maxPrice,
          page,
        );
        res.json({ status: 200, data: allProducts });
      }
      if (place == 'all' && brands.length != 0) {
        const { rows: allProducts } = await getAllProductsByBrandsQuery(
          minPrice,
          maxPrice,
          page,
          smallLettersBrands,
        );
        res.json({ status: 200, data: allProducts });
      }
      if ((place == 'in' || place == 'out') && brands.length == 0) {
        const { rows: allProducts } = await getProductsByPlaceQuery(
          minPrice,
          maxPrice,
          page,
          place,
        );
        res.json({ status: 200, data: allProducts });
      }
      if ((place == 'in' || place == 'out') && brands.length != 0) {
        const { rows: allProducts } = await getProductsByPlaceANDBrandsQuery(
          minPrice,
          maxPrice,
          page,
          place,
          smallLettersBrands,
        );
        res.json({ status: 200, data: allProducts });
      }
    }
    if (categoryId != undefined) {
      if (subCategory == 0 && brands.length == 0) {
        const { rows: allProducts } = await getProductsByCategoryIdQuery(
          minPrice,
          maxPrice,
          page,
          categoryId,
        );
        return res.json({
          message: 'Successfully retrieved products',
          status: 200,
          dataLength: allProducts.length,
          data: allProducts,
        });
      }
      if (subCategory == 0 && brands.length != 0) {
        const { rows: allProducts } = await getProductsByCategoryIdAndBrandsQuery(
          minPrice,
          maxPrice,
          page,
          categoryId,
          smallLettersBrands,
        );
        return res.json({
          message: 'Successfully retrieved products',
          status: 200,
          dataLength: allProducts.length,
          data: allProducts,
        });
      }
      if (subCategory != 0 && brands.length == 0) {
        const { rows: allProducts } = await getProductsByCategoryIdAndSubCategoryQuery(
          minPrice,
          maxPrice,
          page,
          categoryId,
          subCategory,
        );
        return res.json({
          message: 'Successfully retrieved products',
          status: 200,
          dataLength: allProducts.length,
          data: allProducts,
        });
      }
      if (subCategory != 0 && brands.length != 0) {
        const { rows: allProducts } = await getProductsByCategoryIdAndSubCategoryAndBrandsQuery(
          minPrice,
          maxPrice,
          page,
          categoryId,
          subCategory,
          smallLettersBrands,
        );
        return res.json({
          message: 'Successfully retrieved products',
          status: 200,
          dataLength: allProducts.length,
          data: allProducts,
        });
      }
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default getProductsFilteredController;
