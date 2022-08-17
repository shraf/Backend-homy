import { array, object, string } from 'yup';

const productSchema = object({
  name: string().required('Name is required'),
  price: Number().required('Image is required'),
  image: string().required('Place is required'),
  albums: array().required('Albums is required'),
  description: string().required('Description is required'),
  quick_overview: string().required('Quick overview is required'),
  discount: Number().required('Discount is required'),
  shipment: Number(),
  brand: string().required('Brand is required'),
  inStock: Boolean(),
  subCategoryId: Number(),
  categoryId: Number().required('Category is required'),
});

export default productSchema;
