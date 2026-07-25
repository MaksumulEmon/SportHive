'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1461896836934-bd45ba8a0094?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-400 backdrop-blur-sm">
            <span className="mr-2 h-2 w-2 rounded-full bg-blue-400" />
            Discover Sports Events Near You
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Your Ultimate{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Sports Event
            </span>{' '}
            Platform
          </h1>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 sm:text-xl">
            Find, join, and manage sports events in your area. From local tournaments to
            professional competitions — everything you need in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/events"
              className="inline-flex items-center rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/40"
            >
              Explore Events
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
              href="/register"
              className="inline-flex items-center rounded-lg border border-gray-600 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-gray-500 hover:bg-white/20"
            >
              Get Started Free
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-gray-800 pt-8 sm:gap-12">
            <div>
              <div className="text-3xl font-bold text-white sm:text-4xl">500+</div>
              <div className="mt-1 text-sm text-gray-400">Active Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white sm:text-4xl">10K+</div>
              <div className="mt-1 text-sm text-gray-400">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white sm:text-4xl">50+</div>
              <div className="mt-1 text-sm text-gray-400">Cities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
