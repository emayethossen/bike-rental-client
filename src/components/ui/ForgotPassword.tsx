import { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually handle the form submission to request a password reset
    // For example, you might send the email to your backend service
    setMessage('A password reset link has been sent to your email address.');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
        <p className="mb-4 text-center text-gray-600">
          Enter your email address below, and we'll send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input py-2 px-4 rounded bg-gray-100 w-full"
            required
          />
          <input
            type="submit"
            value="Send Reset Link"
            className="p-2 rounded text-white bg-green-500 font-semibold w-full"
          />
          {message && (
            <p className="mt-4 text-center text-green-500">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;


{/* <ul>
<li>
Lightweight Design
</li>
<li>
Ventilation System
</li>
<li>
High Impact Protection
</li>
<li>
Retro Aesthetic
</li>
<li>
Adjustable Fit
</li>
<li>
Durable Shell
</li>
</ul> */}