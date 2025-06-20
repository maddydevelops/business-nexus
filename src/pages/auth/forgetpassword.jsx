import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      setMessage(data.message);
      setEmail('');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#4e54c8] to-[#8f94fb] flex items-center justify-center px-4 py-10 font-[Poppins]">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/30 shadow-2xl rounded-3xl overflow-hidden">
        <div className="p-10 flex flex-col justify-center bg-white/10">
          <h2 className="text-4xl font-extrabold text-white mb-2 text-center">
            Forgot Password
          </h2>
          <p className="text-sm text-white/80 mb-6 text-center">
            Enter your email address to reset your password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
              required
            />
            
            <button
              type="submit"
              className="w-full py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Send Reset Link
            </button>
          </form>

          {message && (
            <div className="mt-4 text-center text-white/80">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
