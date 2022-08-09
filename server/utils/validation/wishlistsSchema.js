import {
  object, number, array, string,
} from 'yup';

const wishlistsSchema = object({
  wishlists: array()
    .of(
      object().shape({
        id: number().required('Product id is required'),
        name: string(),
        price: number(),
        image: string(),
        albums: array(),
        description: string(),
        quick_overview: string(),
        discount: number(),
        brand: string(),
        inStock: Boolean(),
        createdAt: string(),
        category_id: number(),
        quantity: number(),
      }),
    )
    .required('wishlist is required'),
});

export default wishlistsSchema;
