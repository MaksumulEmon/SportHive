export default function SkeletonEventCard() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Image Skeleton */}
      <div className="aspect-video animate-pulse bg-gray-200" />

      {/* Content Skeleton */}
      <div className="p-5">
        {/* Title */}
        <div className="mb-2 h-6 w-3/4 animate-pulse rounded bg-gray-200" />

        {/* Description */}
        <div className="mb-4 space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Info */}
        <div className="mb-4 space-y-3">
          <div className="flex items-center">
            <div className="mr-2 h-4 w-4 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
          </div>
          <div className="flex items-center">
            <div className="mr-2 h-4 w-4 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
          </div>
          <div className="flex items-center">
            <div className="mr-2 h-4 w-4 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="h-6 w-16 animate-pulse rounded bg-gray-200" />
          <div className="h-10 w-28 animate-pulse rounded-lg bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
