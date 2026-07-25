'use client';

import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="bg-blue-600 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Stay Updated</h2>
          <p className="mb-8 text-lg text-blue-100">
            Subscribe to our newsletter for the latest sports events, tips, and exclusive offers.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 rounded-lg border-2 border-transparent px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-white focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="rounded-lg bg-gray-900 px-8 py-3 font-semibold text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-sm text-green-200">
              Thank you for subscribing! Check your email for confirmation.
            </p>
          )}

          {status === 'error' && (
            <p className="mt-4 text-sm text-red-200">Something went wrong. Please try again.</p>
          )}

          <p className="mt-4 text-xs text-blue-200">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
