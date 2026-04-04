import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // If no token, send them to signup
    return <Navigate to="/signup" replace />;
  }

  // If token exists, render the dashboard/page
  return children;
};