import { object, string } from 'yup';

const categorySchema = object({
  name: string().required('Name is required'),
  image: string().required('Image is required'),
  place: string().required('Place is required'),
  hasSubCategories: Boolean().required('hasSubCategories is required'),
});

export default categorySchema;
