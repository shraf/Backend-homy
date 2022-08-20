import { object, string, boolean } from 'yup';

const categorySchema = object({
  name: string().required('Name is required'),
  image: string().required('Image is required'),
  place: string().required('Place is required'),
  hasSubCategories: boolean().required('Has sub categories is required'),
});

export default categorySchema;
