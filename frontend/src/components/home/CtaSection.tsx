import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Ready to Get Started?</h2>
          <p className="mb-8 text-lg text-gray-300">
            Join thousands of sports enthusiasts discovering and managing events on SportHive. Your
            next adventure is just a click away.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex items-center rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/40"
            >
              Create Free Account
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center rounded-lg border border-gray-600 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-gray-500 hover:bg-white/20"
            >
              Explore Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
