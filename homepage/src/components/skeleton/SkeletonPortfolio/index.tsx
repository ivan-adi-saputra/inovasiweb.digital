import { Skeleton } from "@/components/ui/skeleton";
import { NextPage } from "next";

interface Props {}

const SkeletonPortfolio: NextPage<Props> = ({}) => {
  return (
    <div>
      <div className="cursor-pointer">
        {/* Skeleton for Image */}
        <Skeleton
          className="mb-4 rounded-lg w-full"
          style={{ height: "200px", width: "300px" }}
        />

        {/* Skeleton for Name Text */}
        <Skeleton className="h-6 w-2/3 mx-auto mt-2" />
      </div>
    </div>
  );
};

export default SkeletonPortfolio;
