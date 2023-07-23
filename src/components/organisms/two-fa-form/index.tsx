import { FormEventHandler } from "react";
import { Grid, Typography } from "@mui/material";
import { Button, Card } from "src/components/atoms";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import AuthCode from "react-auth-code-input";
import { Control, Controller, FieldErrorsImpl } from "react-hook-form";
import { TwoFAData } from "src/pages/two-fa";
import "./two-fa.css";

interface TwoFAFormProps {
  control: Control<TwoFAData>;
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
  errors: Partial<FieldErrorsImpl<TwoFAData>> | undefined;
}
export const TwoFAForm = ({
  handleSubmit,
  control,
  errors,
}: TwoFAFormProps) => {
  return (
    <Grid container>
      <Grid md={4} sm={12} xs={12} item></Grid>
      <Grid md={4} sm={12} xs={12} item>
        <Card>
          <form onSubmit={handleSubmit}>
            <Typography
              variant="h6"
              sx={{
                mr: 2,
                fontWeight: 700,
                textAlign: "center",
                fontSize: "30px",
                paddingBottom: "15px",
                color: "#8B26B2",
              }}
            >
              <MarkUnreadChatAltIcon sx={{ mr: 1 }} />
              Chatify
            </Typography>
            <Typography variant="body1" textAlign="center">
              Enter Verification Code sent to Whatsapp
            </Typography>
            <Grid container>
              <Grid md={12} mt={2} item>
                <div className="two-fa-area">
                  <Controller
                    name="two_fa_code"
                    control={control}
                    render={({ field }) => (
                      <AuthCode
                        length={4}
                        allowedCharacters="numeric"
                        inputClassName="input"
                        containerClassName="container"
                        {...field}
                      />
                    )}
                  />
                  <Typography variant="subtitle2" color="red">
                    {errors?.two_fa_code?.message}
                  </Typography>
                </div>
              </Grid>

              <Grid
                md={12}
                mt={2}
                item
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  type="submit"
                  fullWidth={false}
                  style={{
                    borderRadius: "35px",
                    backgroundColor: "#8B26B2",
                  }}
                >
                  Verify Code
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Grid>
      <Grid md={4} sm={12} xs={12} item></Grid>
    </Grid>
  );
};
