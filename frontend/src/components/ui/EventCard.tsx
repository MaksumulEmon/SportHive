import Link from 'next/link';

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  location: string;
  fee: number;
  organizer: string;
  imageUrl: string;
}

export default function EventCard({
  id,
  title,
  description,
  category,
  date,
  location,
  fee,
  organizer,
  imageUrl,
}: EventCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
            {category}
          </span>
        </div>
        {fee === 0 && (
          <div className="absolute top-3 right-3">
            <span className="inline-block rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">
              Free
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-2 line-clamp-1 text-lg font-semibold text-gray-900 group-hover:text-blue-600">
          {title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-gray-600">{description}</p>

        {/* Info */}
        <div className="mb-4 space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <svg
              className="mr-2 h-4 w-4 flex-shrink-0 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {date}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <svg
              className="mr-2 h-4 w-4 flex-shrink-0 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {location}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <svg
              className="mr-2 h-4 w-4 flex-shrink-0 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            {organizer}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="text-lg font-bold text-blue-600">{fee === 0 ? 'Free' : `$${fee}`}</div>
          <Link
            href={`/events/${id}`}
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
