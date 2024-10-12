import { Skeleton } from "@/components/ui/skeleton";

const PricingCardSkeleton = () => {
  return (
    <div className="flex-none w-1/2 px-2">
      <div className="relative bg-white rounded-3xl p-8 border border-purple-100">
        {/* Title Skeleton */}
        <h6 className="text-center text-green-500 text-xl font-semibold">
          <Skeleton className="h-6 w-32 mx-auto" />
        </h6>

        {/* Subtext Skeleton */}
        <h6 className="text-[12px] text-center text-gray-400 my-2">
          <Skeleton className="h-4 w-16 mx-auto" />
        </h6>

        {/* Price Skeleton */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-5">
          <Skeleton className="h-10 w-40 mx-auto" />
        </h1>

        {/* Benefits Skeleton */}
        <Skeleton className="h-5 w-40 mx-auto mb-3" />
        {[...Array(3)].map((_, key) => (
          <div className="mb-3" key={key}>
            <div className="flex items-center">
              <Skeleton className="h-5 w-5 text-green-500 mr-3" />
              <Skeleton className="h-5 w-48" />
            </div>
            <div className="h-px w-full bg-purple-100 mt-2"></div>
          </div>
        ))}

        {/* Button Skeleton */}
        <Skeleton className="bg-purple-500 text-white px-9 py-3 rounded-full w-full border-0 font-medium items-center text-center block h-12" />
      </div>
    </div>
  );
};

export default PricingCardSkeleton;
