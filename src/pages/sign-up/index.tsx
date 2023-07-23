import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpDTO } from "src/dto/user.dto";
import { SignUpForm } from "src/components/organisms";
import SignUpSchema from "src/shema/sign-up";
import { useMutation } from "react-query";
import { ErrorResponse, OnError } from "src/dto/common.dto";
import axios from "axios";
import { BackendValidation } from "src/utils/backend-validations";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      full_name: "",
      phone_number: "",
      email: "",
      password: "",
      user_type: 1,
    },
    resolver: yupResolver(SignUpSchema),
  });
  const navigate = useNavigate();

  /**
   * if employee data successfully saved or update this success function triggered
   */
  const successfullySaved = () => {
    reset();
    toast.success("User created successfully", {
      hideProgressBar: false,
    });
    navigate("/login");
  };

  /**
   * this function trigger for backend validations
   * @typedef ErrorResponse
   * @prop {object} error employee validation object
   */
  const throwBackendValidation = (error: ErrorResponse) => {
    if (error?.status === 422) {
      for (const property in error?.data) {
        BackendValidation(setError, property, error?.data[property]?.message);
      }
    }
  };

  const signUp = async (data: SignUpDTO) => {
    return axios.post(`http://localhost:8000/auth/store`, data);
  };
  const { mutate, isLoading } = useMutation(signUp, {
    onError: (error: OnError) => {
      if (error?.response?.status !== 422) {
        toast.error("Something went wrong", {
          hideProgressBar: false,
        });
      } else {
        throwBackendValidation(error.response);
      }
    },
    onSuccess: successfullySaved,
  });
  const onSubmit = (data: SignUpDTO) => {
    mutate(data);
  };

  return (
    <>
      <SignUpForm
        control={control}
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
        isLoading={isLoading}
      />
    </>
  );
};

export default SignUp;
