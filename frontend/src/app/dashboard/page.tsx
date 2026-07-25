'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { eventsApi, Event } from '@/lib/api/events';
import MainLayout from '@/components/layout/MainLayout';
import StatCard from '@/components/dashboard/StatCard';
import CategoryPieChart from '@/components/dashboard/CategoryPieChart';
import UserEventsTable from '@/components/dashboard/UserEventsTable';
import DashboardSkeleton from '@/components/dashboard/DashboardSkeleton';

export default function DashboardPage() {
  const router = useRouter();
  const { user, isLoading: authLoading } = useAuth();
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        setError('Failed to load events');
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, [user]);

  const stats = useMemo(() => {
    const totalEvents = events.length;
    const upcomingEvents = events.filter((e) => new Date(e.date) > new Date()).length;
    const totalRevenue = events.reduce((sum, e) => sum + e.fee, 0);
    const totalCapacity = events.reduce((sum, e) => sum + e.maxParticipants, 0);
    return { totalEvents, upcomingEvents, totalRevenue, totalCapacity };
  }, [events]);

  if (authLoading || !user) {
    return <DashboardSkeleton />;
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}</h1>
            <p className="text-gray-600">Here&apos;s an overview of your sports events</p>
          </div>

          {/* Error State */}
          {error && (
            <div className="mb-8 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Stat Cards */}
          <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard label="Total Events" value={stats.totalEvents} icon="calendar" />
            <StatCard label="Upcoming Events" value={stats.upcomingEvents} icon="clock" />
            <StatCard label="Total Revenue" value={`$${stats.totalRevenue}`} icon="dollar" />
            <StatCard label="Total Capacity" value={stats.totalCapacity} icon="users" />
          </div>

          {/* Chart */}
          <div className="mb-8">
            <CategoryPieChart events={events} />
          </div>

          {/* Events Table */}
          <UserEventsTable events={events} isLoading={isLoading} />
        </div>
      </div>
    </MainLayout>
  );
}
