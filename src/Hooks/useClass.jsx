
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
const useClass = () => {
  const { user,loading } =useAuth()
  const [axiosSecure]=useAxiosSecure()

  const { data: selectedClass = [],refetch } = useQuery({
    queryKey: ["selectclass", user?.email],
    enabled:!loading,
    queryFn: async () => {
      if (!user) return [];
      const res = await axiosSecure(`/selectedclass?email=${user?.email}`);
      return res.data;
    },
  });
  return [selectedClass,refetch];
};
export default useClass;
