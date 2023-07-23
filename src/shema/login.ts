import * as yup from "yup";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is a required field"),
  password: yup.string().required("Password is a required field"),
});

export default LoginSchema;
