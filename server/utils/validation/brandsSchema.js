import { object, string } from 'yup';

const brandsSchema = object({
  name: string().required('Name is required'),
  image: string().required('Image is required'),
});

export default brandsSchema;
