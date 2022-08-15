import {
  object, number, array, string,
} from 'yup';

const cartsSchema = object({
  carts: array()
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
        shipment: number(),
        inStock: Boolean(),
        createdAt: string(),
        category_id: number(),
        quantity: number().required('Quantity is required'),
      }),
    )
    .required('cart is required'),
});

export default cartsSchema;
