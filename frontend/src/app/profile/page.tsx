'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import MainLayout from '@/components/layout/MainLayout';

export default function ProfilePage() {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
        </div>
      </MainLayout>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
            <p className="text-gray-600">Manage your account settings</p>
          </div>

          {/* Profile Card */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
                <span
                  className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                    user.role === 'admin'
                      ? 'bg-purple-100 text-purple-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {user.role === 'admin' ? 'Administrator' : 'User'}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              href="/dashboard"
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Dashboard</h3>
              <p className="text-sm text-gray-600">View your events and statistics</p>
            </Link>
            <Link
              href="/purchases"
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900">My Purchases</h3>
              <p className="text-sm text-gray-600">View your event registrations</p>
            </Link>
            <Link
              href="/events/add"
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Add Ground</h3>
              <p className="text-sm text-gray-600">Create a new sports event</p>
            </Link>
            <Link
              href="/events/manage"
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Manage Events</h3>
              <p className="text-sm text-gray-600">Edit or delete your events</p>
            </Link>
          </div>

          {/* Admin Link */}
          {user.role === 'admin' && (
            <div className="mt-4">
              <Link
                href="/admin"
                className="block rounded-xl border border-purple-200 bg-purple-50 p-6 shadow-sm transition-all hover:shadow-md"
              >
                <h3 className="mb-2 text-lg font-semibold text-purple-900">Admin Dashboard</h3>
                <p className="text-sm text-purple-600">Manage users, events, and view statistics</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}