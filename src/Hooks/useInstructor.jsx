import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {

    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();


    
    const { data: isInstructor, isLoading: instructorIsLoading } = useQuery({
      queryKey: ["isInstructor", user?.email],
      enabled: !!user?.email && !!localStorage.getItem("access-token"),
      queryFn: async () => {
        const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
        console.log('instructor', res);
        return res.data.instructor;
      },
    });
    return [isInstructor, instructorIsLoading];
};

export default useInstructor;