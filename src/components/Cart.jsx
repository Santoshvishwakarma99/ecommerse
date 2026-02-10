import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, gstRate } = useCart(); 

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalGst = cartItems.reduce(
    (total, item) => total + (item.gstAmount || 0),
    0
  );

  const grandTotal = parseFloat((subtotal + totalGst).toFixed(2));

  if (cartItems.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl mt-12">Your cart is empty</h2>
        <Link to="/" className="text-blue-500 text-black">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="flex items-center border-b py-4">
          <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded mr-4" />
          <div className="flex-grow">
            <h3 className="text-lg font-medium">{item.name}</h3>
            <p>Size: {item.selectedSize}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</p>
            {typeof item.gstAmount === 'number' && (
              <p className="text-sm text-gray-600">GST ({Math.round(gstRate * 100)}%): ₹{item.gstAmount}</p>
            )}
            {typeof item.totalWithGst === 'number' && (
              <p className="font-medium">Total with GST: ₹{item.totalWithGst}</p>
            )}
          </div>
         
          {/* Remove button */}
          <button
            className="bg-red-500 text-white px-3 py-1 rounded ml-4"
            onClick={() => removeFromCart(item.id, item.selectedSize)}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="text-right mt-6">
        <div className="text-gray-700">Subtotal: ₹{subtotal.toFixed(2)}</div>
        <div className="text-gray-700">GST Total: ₹{totalGst.toFixed(2)}</div>
        <div className="text-xl font-bold">Grand Total: ₹{grandTotal.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CartPage;
