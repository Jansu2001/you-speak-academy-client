
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
const useCarts = () => {
  // const { user } = useContext(AuthContext);
  const { user,loading } =useAuth()
  const [axiosSecure]=useAxiosSecure()

  const { data: cart = [], refetch } = useQuery({
    queryKey: ["carts", user?.email],
    enabled:!loading,
    queryFn: async () => {
      if (!user) return [];
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};
export default useCarts;
