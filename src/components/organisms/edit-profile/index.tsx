import { Box, Grid, Typography } from "@mui/material";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";

import { Button, Card, InputBox } from "src/components/atoms";

import { Control, FieldErrorsImpl } from "react-hook-form";
import { FormEventHandler } from "react";
import { EditProfileDTO } from "src/dto/user.dto";

interface EditProfileFormProps {
  control: Control<EditProfileDTO>;
  handleSubmit: () => void;
  errors: Partial<FieldErrorsImpl<EditProfileDTO>> | undefined;
  isLoading: boolean;
}
const EditProfileForm = ({
  control,
  handleSubmit,
  errors,
  isLoading,
}: EditProfileFormProps) => {
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
          <Box mt={2}>
            <form onSubmit={handleSubmit}>
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
                  Update Profile
                </Button>
              )}

              <Box mt={4}></Box>
            </form>
          </Box>
        </Card>
      </Grid>
      <Grid md={4} sm={12} xs={12} item></Grid>
    </Grid>
  );
};

export default EditProfileForm;
