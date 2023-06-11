import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePaymentHistory = () => {

  const { user } = useAuth();
  
  const [axiosSecure] = useAxiosSecure();

  const { data: myPayments = [], isLoading } = useQuery({
    queryKey: ["addedClass", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/paymenthistory?email=${user?.email}`);
      return res.json();
    },
  });
  return [myPayments, isLoading];
};
export default usePaymentHistory;
