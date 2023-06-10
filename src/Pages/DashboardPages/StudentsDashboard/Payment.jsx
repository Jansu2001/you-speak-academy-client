import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { useLoaderData } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRET_KEY);
const Payment = () => {

    const selectedClass=useLoaderData()
    const total=selectedClass.price 
    const totalPrice=parseFloat(total)

    return (
        <div className="text-center p-10">
             <h4 className="text-3xl font-bold">Please Proceed Payment</h4>
             <p>{selectedClass.price}</p>
             <Elements stripe={stripePromise}>
                <CheckOut totalPrice={totalPrice} selectedClass={selectedClass}></CheckOut>
             </Elements>
        </div>
    );
};

export default Payment;