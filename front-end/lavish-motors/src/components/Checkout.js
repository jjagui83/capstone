import React, { useState } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PayButton, NameInput, CheckoutContainer } from '../StyledComponents/CheckoutStyle';
import "./Checkout.css";

const Checkout = () => {
  const stripe = loadStripe("pk_test_***************");
  return (
    <Elements stripe={stripe}>
      <CheckoutForm />
    </Elements>
  );
};
function CheckoutForm() {
  const [isPaymentLoading, setPaymentLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const payMoney = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setPaymentLoading(true);
    // const clientSecret = getClientSecret();

    const paymentResult = await stripe.confirmCardPayment({
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Faruq Yusuff",
        },
      },
    });
    setPaymentLoading(false);
    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Success!");
      }
    }
  };

  return (
    <CheckoutContainer
      style={{
        padding: "3rem",
      }}
    >
      <div className="shadow p-3 mb-5 bg-white rounded"
        style={{
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <form
          style={{
            display: "block",
            width: "100%",
          }}
          onSubmit={payMoney}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <NameInput className="firstName" placeholder="First Name" />
            <NameInput className="lastName" placeholder="Last Name" />
            <CardElement
              className="card"
              options={{
                style: {
                  base: {
                    backgroundColor: "white",
                  },
                },
              }}
            />
            <PayButton className="pay-button" disabled={isPaymentLoading}>
              {isPaymentLoading ? "Reservation Confirmed" : "Pay"}
            </PayButton>
          </div>
        </form>
      </div>
    </CheckoutContainer>
  );
}
export default Checkout;
