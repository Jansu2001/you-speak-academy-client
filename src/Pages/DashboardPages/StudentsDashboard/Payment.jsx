import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRET_KEY);
const Payment = () => {
    return (
        <div className="text-center p-10">
             <h4 className="text-3xl font-bold">Please Proceed Payment</h4>
             <Elements stripe={stripePromise}>
                <CheckOut></CheckOut>
             </Elements>
        </div>
    );
};

export default Payment;