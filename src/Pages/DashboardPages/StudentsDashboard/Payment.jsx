import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { useLoaderData } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRET_KEY);
// console.log(import.meta.env.VITE_PAYMENT_SECRET_KEY);
const Payment = () => {

    const selectedClass=useLoaderData()
    const total=selectedClass.price 
    const price=parseInt(total)
    console.log('payment', selectedClass);

    return (
        <div className="text-center p-10">
             <h4 className="text-3xl font-bold">Please Proceed Your Payment</h4>
             <div className="">
             <Elements stripe={stripePromise}>
                <CheckOut totalPrice={price} selectedClass={selectedClass}></CheckOut>
             </Elements>
             </div>
        </div>
    );
};

export default Payment;