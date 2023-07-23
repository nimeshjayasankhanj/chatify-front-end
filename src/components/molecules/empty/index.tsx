import { Box, Typography } from "@mui/material";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

import { Card } from "src/components/atoms";

export const Empty = () => {
  return (
    <Card>
      <Box style={{ padding: "10px" }}>
        <Typography style={{ textAlign: "center" }}>
          <Inventory2OutlinedIcon style={{ fontSize: "40px" }} />
        </Typography>
        <Typography variant="h5" textAlign="center" fontWeight={"bold"}>
          Sorry, No Data Found !
        </Typography>
      </Box>
    </Card>
  );
};
