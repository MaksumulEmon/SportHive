'use client';

import Link from 'next/link';
import { Event } from '@/lib/api/events';

interface UserEventsTableProps {
  events: Event[];
  isLoading: boolean;
}

export default function UserEventsTable({ events, isLoading }: UserEventsTableProps) {
  if (isLoading) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 p-6">
          <div className="h-6 w-32 animate-pulse rounded bg-gray-200" />
        </div>
        <div className="p-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="mb-4 flex items-center gap-4">
              <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-12 text-center shadow-sm">
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">No events yet</h3>
        <p className="mt-2 text-sm text-gray-600">Get started by creating your first event.</p>
        <Link
          href="/events/add"
          className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Add Event
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900">
          My Events
          <span className="ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600">
            {events.length}
          </span>
        </h3>
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-x-auto sm:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Fee
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {events.map((event) => (
              <tr key={event._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="line-clamp-1 text-sm font-medium text-gray-900">
                    {event.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600">
                    {event.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-600">
                  {new Date(event.date).toLocaleDateString()}
                </td>
                <td className="line-clamp-1 px-6 py-4 text-sm whitespace-nowrap text-gray-600">
                  {event.location}
                </td>
                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                  {event.fee === 0 ? 'Free' : `$${event.fee}`}
                </td>
                <td className="px-6 py-4 text-sm whitespace-nowrap">
                  <Link href={`/events/${event._id}`} className="text-blue-600 hover:text-blue-700">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="divide-y divide-gray-200 sm:hidden">
        {events.map((event) => (
          <div key={event._id} className="p-4">
            <div className="mb-2 line-clamp-1 font-medium text-gray-900">{event.title}</div>
            <div className="mb-2 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600">
                {event.category}
              </span>
              <span className="text-xs text-gray-500">
                {new Date(event.date).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">
                {event.fee === 0 ? 'Free' : `$${event.fee}`}
              </span>
              <Link
                href={`/events/${event._id}`}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
