import Link from 'next/link';
import EventCard from '@/components/ui/EventCard';

const featuredEvents = [
  {
    id: '1',
    title: 'Summer Basketball Tournament',
    description:
      'Join the biggest basketball tournament of the summer. Teams from across the region compete for the championship.',
    category: 'Basketball',
    date: 'Aug 15, 2024',
    location: 'Central Sports Arena',
    fee: 50,
    organizer: 'City Sports Club',
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
  },
  {
    id: '2',
    title: 'Marathon for Charity',
    description:
      "Run for a cause! All proceeds go to children's education. Open to all ages and skill levels.",
    category: 'Running',
    date: 'Sep 5, 2024',
    location: 'Downtown City Park',
    fee: 0,
    organizer: 'Hope Foundation',
    imageUrl: 'https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=800&q=80',
  },
  {
    id: '3',
    title: 'Tennis Open Championship',
    description:
      'Professional tennis tournament featuring top players. Watch exciting matches and meet the athletes.',
    category: 'Tennis',
    date: 'Oct 20, 2024',
    location: 'Royal Tennis Club',
    fee: 75,
    organizer: 'National Tennis Association',
    imageUrl: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80',
  },
];

export default function FeaturedEvents() {
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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>

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
