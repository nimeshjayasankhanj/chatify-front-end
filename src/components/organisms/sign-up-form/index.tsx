import {
  Box,
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";

import { Button, Card, InputBox } from "src/components/atoms";

import { Link } from "react-router-dom";
import { Control, Controller, FieldErrorsImpl } from "react-hook-form";
import { FormEventHandler, useState } from "react";
import { SignUpDTO } from "src/dto/user.dto";

interface SignUpFormProps {
  control: Control<SignUpDTO>;
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
  errors: Partial<FieldErrorsImpl<SignUpDTO>> | undefined;
  isLoading: boolean;
}

export const SignUpForm = ({
  control,
  handleSubmit,
  errors,
  isLoading,
}: SignUpFormProps) => {
  return (
    <Grid container>
      <Grid md={4} sm={12} xs={12} item></Grid>
      <Grid md={4} sm={12} xs={12} item>
        <Card>
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
          <Typography variant="h6" fontWeight="bold" textAlign="center">
            Let's get started
          </Typography>
          <Box mt={2}>
            <form onSubmit={handleSubmit}>
              <Controller
                name="user_type"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    {...field}
                  >
                    <FormControlLabel
                      value={1}
                      control={<Radio />}
                      label="Customer"
                    />
                    <FormControlLabel
                      value={0}
                      control={<Radio />}
                      label="Customer Support Agent"
                    />
                  </RadioGroup>
                )}
              />

              <InputBox
                placeholder="Full Name"
                name="full_name"
                control={control}
                error={errors?.full_name?.message}
              />
              <InputBox
                placeholder="Phone Number"
                name="phone_number"
                control={control}
                error={errors?.phone_number?.message}
              />
              <InputBox
                placeholder="Email Address"
                name="email"
                control={control}
                error={errors?.email?.message}
              />
              <InputBox
                placeholder="Password"
                name="password"
                type={"password"}
                control={control}
                error={errors?.password?.message}
              />
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
                  Register
                </Button>
              )}

              <Box mt={2}>
                <Divider>Or Login With</Divider>
                <Typography textAlign="center" mt={2}>
                  Already have an account?
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Sign In
                  </Link>
                </Typography>
              </Box>
              <Box mt={4}></Box>
            </form>
          </Box>
        </Card>
      </Grid>
      <Grid md={4} sm={12} xs={12} item></Grid>
    </Grid>
  );
};
