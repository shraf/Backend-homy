/* eslint-disable eqeqeq */
import {
  getAllProductsQuery,
  getProductsByCategoryIdAndBrandsQuery,
  getProductsByCategoryIdAndSubCategoryAndBrandsQuery,
  getProductsByCategoryIdAndSubCategoryQuery,
  getProductsByCategoryIdQuery,
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
      if (place == 'all') {
        const { rows: allProducts } = await getAllProductsQuery(
          minPrice,
          maxPrice,
          page,
        );
        res.json({ status: 200, data: allProducts });
      }
      if (place == 'in' || place == 'out') {
        const { rows: allProducts } = await getProductsByPlaceQuery(
          minPrice,
          maxPrice,
          page,
          place,
        );
        res.json({ status: 200, data: allProducts });
      }
      // all & have brands still need to be implemented :( :( :(
      // just in & have brands OR just out & have brands still need to be implemented :( :( :(
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
        // not completed :( :( :(
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
      if (subCategory != 0 && brands.length == 0) {
        // not completed :( :( :(
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

    // const filteredProducts = categoryProducts
    //   .filter(
    //     (product) => product.price >= minPrice && product.price <= maxPrice,
    //   )
    //   .filter((product) => {
    //     if (subCategory > 0) {
    //       return product.sub_category_id == subCategory;
    //     }
    //     return product;
    //   })
    //   .filter((product) => {
    //     if (brands.length > 0) {
    //       return smallLettersBrands.includes(product.brand.toLowerCase());
    //     }
    //     return product;
    //   });

    // res.json({
    //   message: 'Successfully retrieved products',
    //   status: 200,
    //   dataLength: filteredProducts.length,
    //   data: filteredProducts,
    // });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default getProductsFilteredController;
