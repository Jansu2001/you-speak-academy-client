import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../../Hooks/useAuth";

const PaymentHistory = () => {

    // const {user}=useAuth()
    const { data: myPayments = [],  } = useQuery(["payment"], async () => {
        // const res = await fetch(`http://localhost:5000/payment-history?email=${user?.email}`);
        const res = await fetch(`http://localhost:5000/payment-history`);
        return res.json();
      });
    return (
        <div>
             <h4>This Is payment Histroy {myPayments.length}</h4>

             <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
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