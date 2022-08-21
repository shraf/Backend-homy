import { array, object, string, number, boolean } from 'yup';

const productSchema = object({
  name: string().required('Name is required'),
  price: number().required('price is required'),
  image: string().required('Place is required'),
  albums: array().required('Albums is required'),
  description: string().required('Description is required'),
  quickOverview: string().required('Quick overview is required'),
  discount: number().required('Discount is required'),
  shipment: number().required('Shipment is required'),
  brand: string().required('Brand is required'),
  inStock: boolean().required('In stock is required'),
  subCategoryId: number(),
  categoryId: number().required('Category is required'),
});

export default productSchema;
