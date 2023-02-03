import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThankYou from './ThankYou'; //thank you message
import reportWebVitals from './reportWebVitals';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('sk_test_51MTHTkCMEQRZJd8lj613NlTEU4OzMFJjYMhvhikpgrEG2z2pVs2yFAibzaNoxXoPZJMVPV1a9mahwpbs9mOs0ZEl005H64ZQ9s');

const router = createBrowserRouter([
  {
    path: "/", //Home
    element: <App />,
  },
  {
    path: "/thankyou",
    element: <ThankYou />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <div style={{position: 'relative'}}>
    <Elements stripe={stripePromise}>
    <NavBar className="navbar" />
    <RouterProvider router={router} />
    <Footer />
    </Elements>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
