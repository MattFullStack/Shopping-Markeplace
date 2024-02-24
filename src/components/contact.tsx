import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your subscribe logic here
    console.log(email);
    // Reset email state or show success message
  };

  return (
    <div className="pt-40 py-20 flex flex-col items-center justify-center pb-40">
      <h2 className="text-2xl font-medium mb-4">Receive our Newsletter</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex flex-col items-center">
          <label htmlFor="email" className="mb-2">
            Enter your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@example.com"
            className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
            required
          />
          <button
            type="submit"
            className="mt-6 px-6 py-2 bg-black text-white font-semibold rounded hover:bg-gray-700"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
