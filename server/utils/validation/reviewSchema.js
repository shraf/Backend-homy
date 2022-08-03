import { object, string, number } from 'yup';

const reviewSchema = object({
  comment: string().required('Review is required'),
  rate: number().required('Rate is required'),
});

export default reviewSchema;
