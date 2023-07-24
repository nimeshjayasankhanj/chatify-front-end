import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Error, Loader } from "src/components/molecules";
import EditProfileForm from "src/components/organisms/edit-profile";
import { ErrorResponse, OnError } from "src/dto/common.dto";
import { EditProfileDTO } from "src/dto/user.dto";
import { userDetails } from "src/service/user-details";
import EditProfileSchema from "src/shema/update-profile";
import { AppDispatch, RootStore } from "src/store";
import { BackendValidation } from "src/utils/backend-validations";
import axios from "src/utils/axios";

const EditProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setError,
  } = useForm({
    defaultValues: {
      email: "",
      full_name: "",
      phone_number: "",
      password: "",
    },
    resolver: yupResolver(EditProfileSchema),
  });

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const { data, loading, isSuccess, isError } = useSelector(
    (state: RootStore) => state.user
  );

  const fetchUserDetails = () => {
    dispatch(userDetails());
  };

  useEffect(() => {
    const formValues = {
      email: data.email,
      full_name: data.full_name,
      phone_number: data.phone_number,
    };
    reset(formValues);
  }, [data, reset]);

  /**
   * if employee data successfully saved or update this success function triggered
   */
  const successfullySaved = () => {
    reset();
    toast.success("User updated successfully", {
      hideProgressBar: false,
    });
    navigate("/");
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

  const editProfile = async (data: EditProfileDTO) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}/user/edit-profile`,
      data
    );
  };
  const { mutate, isLoading } = useMutation(editProfile, {
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

  const onSubmit = (data: EditProfileDTO) => {
    mutate(data);
  };

  if (loading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }
  return (
    <>
      <EditProfileForm
        control={control}
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
        isLoading={isLoading}
      />
    </>
  );
};

export default EditProfile;
