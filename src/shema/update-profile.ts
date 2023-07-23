import * as yup from "yup";

const EditProfileSchema = yup.object().shape({
  full_name: yup.string().required("First Name is a required field"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is a required field"),
  phone_number: yup
    .string()
    .min(12, "Phone Number must be at least 10 characters")
    .max(12, "Phone Number must be at most 10 characters")
    .required("Phone Number is a required field")
    .matches(
      /^(?:\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/,
      "Invalid phone number"
    ),
  password: yup
    .string()
    .required("Password is a required field")
    .min(8, "Password is too short - should be 8 chars minimum"),
});

export default EditProfileSchema;
