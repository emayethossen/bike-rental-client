import { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
  };

  return (
    <div className="bg-[#E0F7FA] py-12 px-6">
      <div className="w-3/5 mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-[#121416] mb-4">
        Subscribe to our newsletter about new products
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Stay updated with the latest news and exclusive offers!
        </p>
        <form onSubmit={handleSubscribe} className="max-w-md  mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="py-3 px-6 bg-green-500 text-white rounded-md font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
