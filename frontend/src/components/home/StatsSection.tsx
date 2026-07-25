'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Football', events: 120 },
  { name: 'Basketball', events: 85 },
  { name: 'Tennis', events: 64 },
  { name: 'Running', events: 95 },
  { name: 'Swimming', events: 42 },
  { name: 'Cycling', events: 58 },
];

const stats = [
  { label: 'Active Events', value: '500+' },
  { label: 'Happy Users', value: '10,000+' },
  { label: 'Cities Covered', value: '50+' },
  { label: 'Sports Categories', value: '20+' },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Platform Statistics</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            See how SportHive is growing and connecting sports communities.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center"
              >
                <div className="mb-2 text-3xl font-bold text-blue-600 sm:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Events by Category</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                    axisLine={{ stroke: '#e5e7eb' }}
                  />
                  <YAxis
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                    axisLine={{ stroke: '#e5e7eb' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar dataKey="events" fill="#2563eb" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
