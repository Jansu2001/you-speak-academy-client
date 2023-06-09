
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useInstructor from "../Hooks/useInstructor";

const InstructorRoute = ({children}) => {
  const { user, loading } = useAuth()
  const [isInstructor,instructorIsLoading]=useInstructor()

  const location=useLocation()
  if (loading || instructorIsLoading) {
    return <progress className="progress w-56" value="100" max="100"></progress>
  }
   else if (user && isInstructor) {
    return children
  }
   else {
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
  }
};

export default InstructorRoute;

