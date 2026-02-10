import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent to GORDON & BROS.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-12">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact GORDON & BROS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Reach Us</h3>
          <p className="mb-2">
            <span className="font-semibold">Address:</span> Virat Nagar ,Ahmedabad, India
          </p>
          <p className="mb-2">
            <span className="font-semibold">Phone:</span> +91 9409972762
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span> sv381739@gmail.com
          </p>
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-blue-600 hover:underline">Facebook</a>
              <a href="#" className="text-blue-400 hover:underline">Twitter</a>
              <a href="#" className="text-pink-500 hover:underline">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
