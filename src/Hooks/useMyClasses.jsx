import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyClasses = () => {

  const { user } = useAuth();
  
  const [axiosSecure] = useAxiosSecure();

  const { data: addedClass = [], isLoading } = useQuery({
    queryKey: ["addedClass", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/AddedClasses?email=${user?.email}`);
      return res.json();
    },
  });
  return [addedClass, isLoading];
};
export default useMyClasses;
