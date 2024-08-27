import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
      setMessage('Email is required.');
    } else if (!emailPattern.test(email)) {
      setMessage('Please enter a valid email address.');
    } else {
      setMessage('Thank you for subscribing!');
      setEmail('');
    }
    console.log(email)
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          className="p-2 border rounded"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Subscribe
        </button>
      </form>
      
      {message && <p className="text-center mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default Newsletter;
