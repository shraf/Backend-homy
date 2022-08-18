import {
  object, string, number, array,
} from 'yup';

const rolesSchema = object({
  name: string().required('name of role is required'),
  permissionPage: array().of(object().shape({
    permissionId: number().required('Permission id is required'),
    pageId: number().required('Page id is required'),
  })).required('Permission id and  page id is required'),
});

export default rolesSchema;
