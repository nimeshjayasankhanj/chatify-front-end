import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const auth = localStorage.getItem("token");
  const location = useLocation();

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
