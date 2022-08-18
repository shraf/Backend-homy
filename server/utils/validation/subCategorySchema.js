import { object, string } from 'yup';

const subCategorySchema = object({
  name: string().required('Name is required'),
  categoryId: string().required('CategoryId is required'),
});

export default subCategorySchema;
