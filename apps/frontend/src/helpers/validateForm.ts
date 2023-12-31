import * as yup from "yup";

export const LoginValidate = yup.object().shape({
  username: yup.string().email().trim().required("El username es requerido"),
  password: yup.string().trim().required("El password es requerido"),
});

export const ModuleCreateValidate = yup.object().shape({
  title: yup.string().trim().required("The title is required"),
  description: yup.string().trim().required("The description is required"),
  module_main: yup
    .string()
    .trim()
    .required("The module main tf file content is required"),
  module_variables: yup
    .string()
    .trim()
    .required("The module variables tf file content is required"),
  module_outputs: yup
    .string()
    .trim()
    .required("The module outputs tf file content is required"),
});
