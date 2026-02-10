import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const amount = queryParams.get('amount');

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    if (!cardName || !cardNumber || !cvv) {
      alert("Please fill all fields!");
      return;
    }
    if (cardNumber.length !== 16) {
      alert("Card Number must be 16 digits!");
      return;
    }
    if (cvv.length !== 3) {
      alert("CVV must be 3 digits!");
      return;
    }

    alert(`Payment Successful! ₹${amount} paid by ${cardName}`);
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-100 to-blue-50">
      <div className="bg-white w-full max-w-sm p-8 rounded-3xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Secure Payment</h2>
        
        <p className="text-center text-gray-700 mb-6">
          Total Amount: <span className="font-bold text-blue-600">₹{amount}</span>
        </p>

        {/* Card Name */}
        <div className="mb-4 relative">
          <label className="block mb-1 text-gray-600 font-medium">Name on Card</label>
          <input
            type="text"
            placeholder="John Doe"
            value={cardName}
            onChange={e => setCardName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Card Number */}
        <div className="mb-4 relative">
          <label className="block mb-1 text-gray-600 font-medium">Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            maxLength={16}
            onChange={e => setCardNumber(e.target.value.replace(/\D/g,''))}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* CVV number */}
        <div className="mb-6 relative">
          <label className="block mb-1 text-gray-600 font-medium">CVV</label>
          <input
            type="password"
            placeholder="123"
            value={cvv}
            maxLength={3}
            onChange={e => setCvv(e.target.value.replace(/\D/g,''))}
            className="w-1/2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-blue-600 text-white py-3 rounded-2xl font-semibold hover:bg-blue-700 transition-colors mb-3"
        >
          Pay Now
        </button>

        {/* Optional small note */}
        <p className="text-center text-gray-500 text-sm mt-2">
          🔒 Your payment is secure and encrypted
        </p>
      </div>
    </div>
  );
};

export default PaymentPage;
