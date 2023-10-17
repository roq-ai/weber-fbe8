import * as yup from 'yup';

export const collaborationValidationSchema = yup.object().shape({
  role: yup.string().nullable(),
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  collaborator_id: yup.string().nullable().required(),
  project_id: yup.string().nullable().required(),
});
