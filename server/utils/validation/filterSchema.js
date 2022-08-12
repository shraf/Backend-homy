import {
  object, number, array, string
} from 'yup';

const filterSchema = object({
  filter: object().shape({
    maxPrice: number(),
    minPrice: number(),
    brands: array(),
    subCategory: string(),
  }),
});

export default filterSchema;
