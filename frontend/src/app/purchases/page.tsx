'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { purchasesApi, Purchase } from '@/lib/api/purchases';
import MainLayout from '@/components/layout/MainLayout';

export default function PurchasesPage() {
  const router = useRouter();
  const { user, isLoading: authLoading } = useAuth();
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cancelId, setCancelId] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    const fetchPurchases = async () => {
      if (!user) return;
      try {
        const response = await purchasesApi.getUserPurchases();
        setPurchases(response.data);
      } catch {
        console.error('Failed to fetch purchases');
      } finally {
        setIsLoading(false);
      }
    };
    fetchPurchases();
  }, [user]);

  const handleCancel = async (id: string) => {
    try {
      await purchasesApi.cancelPurchase(id);
      setPurchases(purchases.map((p) => (p._id === id ? { ...p, status: 'cancelled' as const } : p)));
      setCancelId(null);
    } catch {
      console.error('Failed to cancel purchase');
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
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Purchases</h1>
            <p className="text-gray-600">View and manage your event registrations</p>
          </div>

          {isLoading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="h-5 w-48 animate-pulse rounded bg-gray-200" />
                </div>
              ))}
            </div>
          ) : purchases.length === 0 ? (
            <div className="rounded-xl border border-gray-200 bg-white p-12 text-center shadow-sm">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">No purchases yet</h3>
              <p className="mt-2 text-gray-600">Browse events and register for one!</p>
              <Link
                href="/events"
                className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Browse Events
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {purchases.map((purchase) => (
                <div key={purchase._id} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {(purchase.eventId as unknown as { title: string })?.title || 'Event'}
                          </h3>
                          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-gray-600">
                            <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                              purchase.status === 'confirmed'
                                ? 'bg-green-100 text-green-600'
                                : purchase.status === 'cancelled'
                                ? 'bg-red-100 text-red-600'
                                : 'bg-yellow-100 text-yellow-600'
                            }`}>
                              {purchase.status}
                            </span>
                            <span>${purchase.amount}</span>
                            <span>{new Date(purchase.createdAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/events/${(purchase.eventId as unknown as { _id: string })?._id || ''}`}
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        View Event
                      </Link>
                      {purchase.status === 'confirmed' && (
                        <button
                          onClick={() => setCancelId(purchase._id)}
                          className="rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Cancel Confirmation Modal */}
          {cancelId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="mx-4 w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                <h3 className="text-lg font-semibold text-gray-900">Cancel Registration</h3>
                <p className="mt-2 text-gray-600">
                  Are you sure you want to cancel this registration?
                </p>
                <div className="mt-6 flex justify-end gap-3">
                  <button
                    onClick={() => setCancelId(null)}
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    No, keep it
                  </button>
                  <button
                    onClick={() => handleCancel(cancelId)}
                    className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                  >
                    Yes, cancel
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