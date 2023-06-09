
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({children}) => {
  const { user, loading } = useAuth()
  const [isAdmin,adminIsLoading]=useAdmin()

  const location=useLocation()
  if (loading || adminIsLoading) {
    return <progress className="progress w-56" value="100" max="100"></progress>
  }
   else if (user && isAdmin) {
    return children
  }
   else {
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
  }
};

export default AdminRoute;

