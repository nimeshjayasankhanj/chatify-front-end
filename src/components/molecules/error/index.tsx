import { Box, Typography } from "@mui/material";
import MoodBadOutlinedIcon from "@mui/icons-material/MoodBadOutlined";

import { Card } from "src/components/atoms";

export const Error = () => {
  return (
    <Card>
      <Box style={{ padding: "10px" }}>
        <Typography style={{ textAlign: "center" }}>
          <MoodBadOutlinedIcon style={{ fontSize: "40px" }} />
        </Typography>
        <Typography variant="h5" textAlign="center" fontWeight={"bold"}>
          Something Went Wrong !
        </Typography>
      </Box>
    </Card>
  );
};
