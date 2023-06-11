import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";

const PaymentHistory = () => {

    
  const {user}=useAuth()
  const { data: myPayments = [],  } = useQuery(["class"], async () => {
      const res = await fetch(`http://localhost:5000/paymenthistory?email=${user?.email}`);
      return res.json();
    });
    
      console.log(myPayments);
    return (
        <div>
             <h4 className="m-5 p-3 rounded-full text-white text-4xl mx-auto uppercase  bg-gray-700 w-1/2 font-semibold text-center">This Is payment Histroy: {myPayments.length}</h4>

             <div className="overflow-x-auto">
  <table className="table w-full">
    <thead className="bg bg-sky-500">
      <tr >
        <th>#</th> 
        <th>Transaction-Id</th> 
        <th>Email</th> 
        <th>Name</th> 
        <th>Course </th> 
        <th>Price </th> 
        <th>Date</th> 
      </tr>
    </thead> 
    <tbody>
      {myPayments.map(payment=><tr  key={payment._id}>
        <th>1</th> 
        <td><small>{payment.transactionId}</small></td>
        <td>{payment.email}</td>
        <td className="font-semibold">{payment.name}</td>
        <td className="font-semibold">{payment.course}</td>
        <td className="font-semibold">${payment.price}</td>
        <td className="font-semibold">{payment.date}</td>
      </tr>)}
    </tbody> 
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;