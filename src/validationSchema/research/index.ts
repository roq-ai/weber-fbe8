import * as yup from 'yup';

export const researchValidationSchema = yup.object().shape({
  title: yup.string().required(),
  abstract: yup.string().required(),
  publication_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
