import { Box, Chip, Grid, Typography } from "@mui/material";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { Button, Card } from "src/components/atoms";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { userDetails } from "src/service/user-details";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStore } from "src/store";
import { Loader } from "src/components/molecules";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const navigateToProfileEditPage = () => {
    navigate("/edit-profile");
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = () => {
    dispatch(userDetails());
  };

  const { data, loading, isSuccess, isError } = useSelector(
    (state: RootStore) => state.user
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <Grid container>
      <Grid md={4} sm={12} xs={12}></Grid>
      <Grid md={4} sm={12} xs={12}>
        <Card>
          <Grid
            md={12}
            sm={12}
            xs={12}
            mt={2}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Button
              fullWidth={false}
              onClick={() => navigateToProfileEditPage()}
              style={{
                borderRadius: "35px",
                backgroundColor: "#8B26B2",
              }}
            >
              Update profile
            </Button>
          </Grid>
          <Grid md={12} sm={12} xs={12} mt={2}>
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
              {data.full_name}
            </Typography>
            <Box mt={2} textAlign="center">
              <Chip icon={<MarkEmailUnreadIcon />} label={data.email} />
            </Box>
            <Box mt={2} textAlign="center">
              <Chip icon={<PhoneIphoneIcon />} label={data.phone_number} />
            </Box>
          </Grid>
        </Card>
      </Grid>
      <Grid md={4} sm={12} xs={12}></Grid>
    </Grid>
  );
};

export default Profile;
