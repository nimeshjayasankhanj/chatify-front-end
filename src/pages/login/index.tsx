import { LoginForm } from "src/components/organisms";
import { useForm } from "react-hook-form";
import { LoginDTO } from "src/dto/user.dto";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginSchema from "src/shema/login";
import { ErrorResponse, OnError } from "src/dto/common.dto";
import { BackendValidation } from "src/utils/backend-validations";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(LoginSchema),
  });
  const navigate = useNavigate();

  const successfullySaved = (data: any) => {
    navigate(`/two-fa?id=${data.data.data.id}`);
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

  const login = async (data: LoginDTO) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, data);
  };
  const { mutate, isLoading } = useMutation(login, {
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

  const onSubmit = (data: LoginDTO) => {
    mutate(data);
  };

  return (
    <>
      <LoginForm
        control={control}
        errors={errors}
        handleSubmit={handleSubmit(onSubmit)}
        isLoading={isLoading}
      />
    </>
  );
};

export default Login;
