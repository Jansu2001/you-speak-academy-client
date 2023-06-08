import {  useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
  const { user, loading } = useContext(AuthContext);

  const location=useLocation()
  if (loading) {
    return <progress className="progress w-56" value="100" max="100"></progress>
  }
   else if (user) {
    return children
  }
   else {
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
  }
};

export default PrivateRoutes;

