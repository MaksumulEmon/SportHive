import Link from 'next/link';

const categories = [
  {
    name: 'Football',
    icon: '⚽',
    count: 120,
    color: 'bg-green-500',
  },
  {
    name: 'Basketball',
    icon: '🏀',
    count: 85,
    color: 'bg-orange-500',
  },
  {
    name: 'Tennis',
    icon: '🎾',
    count: 64,
    color: 'bg-yellow-500',
  },
  {
    name: 'Running',
    icon: '🏃',
    count: 95,
    color: 'bg-red-500',
  },
  {
    name: 'Swimming',
    icon: '🏊',
    count: 42,
    color: 'bg-blue-500',
  },
  {
    name: 'Cycling',
    icon: '🚴',
    count: 58,
    color: 'bg-purple-500',
  },
];

export default function CategoriesSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Explore by Category</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Find events in your favorite sport. Choose a category to get started.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/events?category=${category.name.toLowerCase()}`}
              className="group flex flex-col items-center rounded-xl border border-gray-200 p-6 transition-all hover:border-blue-500 hover:shadow-lg"
            >
              <div
                className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full text-3xl text-white ${category.color} transition-transform group-hover:scale-110`}
              >
                {category.icon}
              </div>
              <h3 className="mb-1 text-base font-semibold text-gray-900 group-hover:text-blue-600">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500">{category.count} events</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
