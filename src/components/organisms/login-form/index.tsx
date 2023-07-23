import { Box, Divider, Grid, Typography } from "@mui/material";
import { Button, Card, InputBox } from "src/components/atoms";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import { Link } from "react-router-dom";
import { LoginDTO } from "src/dto/user.dto";
import { Control, FieldErrorsImpl } from "react-hook-form";
import { FormEventHandler } from "react";

interface LoginFormProps {
  control: Control<LoginDTO>;
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
  errors: any;
  isLoading: boolean;
}
export const LoginForm = ({
  control,
  errors,
  handleSubmit,
  isLoading,
}: LoginFormProps) => {
  return (
    <Grid container>
      <Grid md={4} sm={12} xs={12}></Grid>
      <Grid md={4} sm={12} xs={12}>
        <Card>
          <Typography
            variant="h6"
            sx={{
              mr: 2,
              fontWeight: 700,
              textAlign: "center",
              fontSize: "30px",
              paddingBottom: "20px",
              color: "#8B26B2",
            }}
          >
            <MarkUnreadChatAltIcon sx={{ mr: 1 }} />
            Chatify
          </Typography>
          <Typography variant="h6" textAlign="center" fontWeight="bold">
            Welcome Back
          </Typography>
          <Typography textAlign="center">
            Enter your credentials to access your account
          </Typography>
          <Box mt={2}>
            <form onSubmit={handleSubmit}>
              <InputBox
                placeholder="Username"
                name="email"
                control={control}
                error={errors?.email?.message}
              />
              <InputBox
                placeholder="Password"
                name="password"
                control={control}
                error={errors?.email?.message}
                type={"password"}
              />
              <Typography variant="subtitle2" color="red">
                {errors?.invalid_details?.message}
              </Typography>
              {isLoading ? (
                <Button
                  style={{
                    marginTop: "30px",
                    borderRadius: "35px",
                    backgroundColor: "#8B26B2",
                  }}
                >
                  Please Wait...
                </Button>
              ) : (
                <Button
                  type="submit"
                  style={{
                    marginTop: "30px",
                    borderRadius: "35px",
                    backgroundColor: "#8B26B2",
                  }}
                >
                  Login
                </Button>
              )}
            </form>
            <Box mt={4}>
              <Box mt={2}>
                <Divider>Or Register With</Divider>
                <Typography textAlign="center" mt={2}>
                  Don’t have an account?
                  <Link to="/sign-up" style={{ textDecoration: "none" }}>
                    Register
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid md={4} sm={12} xs={12}></Grid>
    </Grid>
  );
};
