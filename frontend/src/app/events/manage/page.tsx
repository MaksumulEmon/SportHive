'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { eventsApi, Event } from '@/lib/api/events';
import MainLayout from '@/components/layout/MainLayout';

export default function ManageEventsPage() {
  const router = useRouter();
  const { user, isLoading: authLoading } = useAuth();
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    const fetchEvents = async () => {
      if (!user) return;
      try {
        const response = await eventsApi.getUserEvents();
        setEvents(response.data);
      } catch {
        console.error('Failed to fetch events');
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, [user]);

  const handleDelete = async (id: string) => {
    try {
      await eventsApi.deleteEvent(id);
      setEvents(events.filter((e) => e._id !== id));
      setDeleteId(null);
    } catch {
      console.error('Failed to delete event');
    }
  };

  if (authLoading || !user) {
    return (
      <MainLayout>
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Manage Events</h1>
              <p className="text-gray-600">View, edit, or delete your events</p>
            </div>
            <Link
              href="/events/add"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Add Ground
            </Link>
          </div>

          {isLoading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 animate-pulse rounded-lg bg-gray-200" />
                    <div className="flex-1">
                      <div className="mb-2 h-5 w-48 animate-pulse rounded bg-gray-200" />
                      <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : events.length === 0 ? (
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
              <p className="mt-2 text-gray-600">Get started by creating your first event.</p>
              <Link
                href="/events/add"
                className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Add Event
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event._id}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200">
                      {event.imageUrl ? (
                        <img
                          src={event.imageUrl}
                          alt={event.title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-gray-400">
                          <svg
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-gray-600">
                            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600">
                              {event.category}
                            </span>
                            <span>{new Date(event.date).toLocaleDateString()}</span>
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-blue-600">
                            {event.fee === 0 ? 'Free' : `$${event.fee}`}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/events/${event._id}`}
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => setDeleteId(event._id)}
                        className="rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Delete Confirmation Modal */}
          {deleteId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="mx-4 w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                <h3 className="text-lg font-semibold text-gray-900">Delete Event</h3>
                <p className="mt-2 text-gray-600">
                  Are you sure you want to delete this event? This action cannot be undone.
                </p>
                <div className="mt-6 flex justify-end gap-3">
                  <button
                    onClick={() => setDeleteId(null)}
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDelete(deleteId)}
                    className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
