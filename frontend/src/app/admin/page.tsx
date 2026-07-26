'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { adminApi } from '@/lib/api/admin';
import MainLayout from '@/components/layout/MainLayout';

export default function AdminPage() {
  const router = useRouter();
  const { user, isLoading: authLoading } = useAuth();
  const [stats, setStats] = useState<{ totalUsers: number; totalEvents: number; categoryStats: Array<{ _id: string; count: number }> } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && (!user || user.role !== 'admin')) {
      router.push('/');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    const fetchStats = async () => {
      if (!user || user.role !== 'admin') return;
      try {
        const response = await adminApi.getStats();
        setStats(response.data);
      } catch {
        console.error('Failed to fetch stats');
      } finally {
        setIsLoading(false);
      }
    };
    fetchStats();
  }, [user]);

  if (authLoading || !user || user.role !== 'admin') {
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
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Manage users, events, and view statistics</p>
          </div>

          {/* Stats Cards */}
          <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-2xl font-bold text-gray-900">
                {isLoading ? '...' : stats?.totalUsers || 0}
              </div>
              <div className="text-sm text-gray-600">Total Users</div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-2xl font-bold text-gray-900">
                {isLoading ? '...' : stats?.totalEvents || 0}
              </div>
              <div className="text-sm text-gray-600">Total Events</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid gap-6 sm:grid-cols-2">
            <Link
              href="/admin/users"
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Manage Users</h3>
              <p className="text-sm text-gray-600">View and delete user accounts</p>
            </Link>
            <Link
              href="/admin/events"
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Manage Events</h3>
              <p className="text-sm text-gray-600">View and manage all events</p>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}