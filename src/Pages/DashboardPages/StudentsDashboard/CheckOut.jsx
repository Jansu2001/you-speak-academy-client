import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAuth from "../../../../../../The-Final-Project-[ Bistro-Boss ]/bistro-boss-client/src/Hooks/useAuth";

const CheckOut = () => {

    // const {user}=useAuth()
    const stripe=useStripe()
    const elements = useElements();
  const [cardError, setCardError] = useState("");
    onst [clientSecret, setClientSecret] = useState("");

    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");



    const handleSubmit = async (event)=>{
        event.preventDefault()
        if (!stripe || !elements) {
            return;
          }
          const card = elements.getElement(CardElement);
          if (card === null) {
            return;
          }
      
          const { error } = await stripe.createPaymentMethod({
            type: "card",
            card,
          });
          if (error) {
            setCardError(error.message);
          
          } 
          else {
            setCardError("");
          }
          setProcessing(true);      
          const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
      if (confirmError) {
        console.log(confirmError);
      }
      setProcessing(false);
    }


    return (
        <div>
            <form className="w-2/3" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Payment
      </button>
    </form>
    {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
        </div>
    );
};

export default CheckOut;