import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TwoFAForm } from "src/components/organisms";
import { verifyTwoFACode } from "src/service/two-fa-service";
import TwoFASchema from "src/shema/two-fa";
import { AppDispatch } from "src/store";

export interface TwoFAData {
  two_fa_code: string;
  id: string;
}

const TwoFA = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
  } = useForm({
    defaultValues: {
      two_fa_code: "",
      id: "",
    },
    resolver: yupResolver(TwoFASchema),
  });
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get("id");
    if (id) setValue("id", id);
  }, []);

  const onSubmit = async (data: TwoFAData) => {
    dispatch(verifyTwoFACode(data))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((error: any) => {
        if (error?.statusCode === 422) {
          setError("two_fa_code", {
            type: "custom",
            message: error?.invalid_detail?.message,
          });
          return;
        }
        toast.error("Something went wrong");
      });
  };

  return (
    <>
      <TwoFAForm
        handleSubmit={handleSubmit(onSubmit)}
        control={control}
        errors={errors}
      />
    </>
  );
};

export default TwoFA;
