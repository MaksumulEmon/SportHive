'use client';

import { useState, useEffect } from 'react';
import { eventsApi, Event, EventFilters } from '@/lib/api/events';
import MainLayout from '@/components/layout/MainLayout';
import EventCard from '@/components/ui/EventCard';
import SkeletonEventCard from '@/components/ui/SkeletonEventCard';

const categories = [
  'All',
  'Football',
  'Basketball',
  'Tennis',
  'Running',
  'Swimming',
  'Cycling',
  'Other',
];
const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'fee-low', label: 'Lowest Fee' },
  { value: 'fee-high', label: 'Highest Fee' },
];

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({ page: 1, pages: 1, total: 0 });
  const [filters, setFilters] = useState<EventFilters>({
    search: '',
    category: '',
    sort: 'newest',
    page: 1,
    limit: 6,
  });

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        const response = await eventsApi.getEvents(filters);
        setEvents(response.data);
        setPagination(response.pagination);
      } catch {
        console.error('Failed to fetch events');
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, [filters]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: e.target.value, page: 1 });
  };

  const handleCategory = (category: string) => {
    setFilters({ ...filters, category: category === 'All' ? '' : category, page: 1 });
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, sort: e.target.value, page: 1 });
  };

  const handlePage = (page: number) => {
    setFilters({ ...filters, page });
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Explore Events</h1>
            <p className="text-gray-600">Discover sports events near you</p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search events..."
                value={filters.search}
                onChange={handleSearch}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pl-10 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <svg
                className="absolute top-3.5 left-3 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    (filters.category === '' && category === 'All') || filters.category === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-4">
              <label className="text-sm text-gray-600">Sort by:</label>
              <select
                value={filters.sort}
                onChange={handleSort}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-4 text-sm text-gray-600">
            {pagination.total} event{pagination.total !== 1 ? 's' : ''} found
          </div>

          {/* Events Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {isLoading
              ? [...Array(6)].map((_, i) => <SkeletonEventCard key={i} />)
              : events.map((event) => (
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
                    imageUrl={
                      event.imageUrl ||
                      'https://images.unsplash.com/photo-1461896836934-bd45ba8a0094?w=800&q=80'
                    }
                  />
                ))}
          </div>

          {/* Empty State */}
          {!isLoading && events.length === 0 && (
            <div className="py-12 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">No events found</h3>
              <p className="mt-2 text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}

          {/* Pagination */}
          {pagination.pages > 1 && (
            <div className="mt-8 flex justify-center gap-2">
              {[...Array(pagination.pages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePage(i + 1)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    pagination.page === i + 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
