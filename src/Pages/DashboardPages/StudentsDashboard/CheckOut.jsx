import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const CheckOut = ({ totalPrice, selectedClass }) => {
  console.log('selectedClass',selectedClass);
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure.post("/create-payment-intent", { totalPrice }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [totalPrice, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
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
    } else {
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

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        paymentClassId: selectedClass._id,
        price: totalPrice,
        date: new Date(),
        course: selectedClass.className,
        name: user?.displayName,
      };

      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res);
        if (res.data.insertResult.acknowledged) {

          Swal.fire(
            "Payment Done!",
            `${user?.displayName} Your Payment Success`,
            "success"
          );

          axiosSecure.post("/enrollClass", selectedClass)
          .then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              console.log(res.data);
            }
          });


        }



        // // TODO:-----------
        fetch(`http://localhost:5000/selectedclass/${selectedClass._id}`, {
          method: "PATCH",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(selectedClass)
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              console.log(data);
            }
          });
          // ---------------------


      });
    }
  };

  return (
    <div>
      <form className="w-2/3" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Payment
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          {" "}
          {user?.displayName} your Payment SuccessFull
        </p>
      )}
    </div>
  );
};

export default CheckOut;
