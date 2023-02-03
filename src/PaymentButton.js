import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';


const PaymentButton = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if (!error) {
      // send the paymentMethod.id to your server
    }
  }

  return (
    <button onClick={handlePayment}>Pay ${props.amount}</button>

    // <button onClick={handlePayment}>Pay Custom Amount</button>
  );
}

export default PaymentButton;