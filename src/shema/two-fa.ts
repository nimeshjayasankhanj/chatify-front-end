import * as yup from "yup";

const TwoFASchema = yup.object().shape({
  two_fa_code: yup.string().required("Two FA is a required field"),
  id: yup.string().required("Two FA is a required field"),
});

export default TwoFASchema;
