import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "src/components/molecules";
import { ToastContainer } from "react-toastify";

export const Layout = () => {
  return (
    <main>
      <Header />
      <Box pl={3} pr={3} pt={3} pb={3}>
        <ToastContainer />
        <Outlet />
      </Box>
    </main>
  );
};
