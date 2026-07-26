'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import EventCard from '@/components/ui/EventCard';
import SkeletonEventCard from '@/components/ui/SkeletonEventCard';
import { eventsApi, Event } from '@/lib/api/events';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1461896836934-bd45ba8a0094?w=800&q=80';

export default function FeaturedEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await eventsApi.getEvents({ sort: 'newest', limit: 6 });
        setEvents(response.data);
      } catch {
        console.error('Failed to fetch featured events');
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Featured Events</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover the most popular sports events happening near you. Don&apos;t miss out on the
            action!
          </p>
        </div>

        {/* Events Grid */}
        {isLoading ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <SkeletonEventCard key={i} />
            ))}
          </div>
        ) : events.length === 0 ? (
          <div className="py-12 text-center text-gray-500">
            No events available yet. Check back soon!
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard
                key={event._id}
                id={event._id}
                title={event.title}
                description={event.description}
                category={event.category}
                date={new Date(event.date).toLocaleDateString()}
                location={event.location}
                fee={event.fee}
                organizer={event.organizer}
                imageUrl={event.imageUrl || FALLBACK_IMAGE}
              />
            ))}
          </div>
        )}

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            href="/events"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
          >
            View All Events
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}