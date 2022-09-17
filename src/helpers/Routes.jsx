import { Navigate, Outlet } from "react-router-dom";
import * as ROUTES from "../constants/Routes";

export function PrivateRoute({ user, children }) {
  if (!user) {
    return children ? children : <Outlet />;
  }
  if (user) {
    return <Navigate to={ROUTES.BROWSE} />;
  }
}

export function ProtectedRoute({ user }) {
  if (!user) {
    return <Navigate to={ROUTES.HOME} />;
  }
  return <Outlet />;
}
