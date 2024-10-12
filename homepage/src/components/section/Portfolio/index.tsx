"use client";
import { NextPage } from "next";
import BannerImage from "@/public/assets/images/item_bootcamp.png";
import PortfolioCard from "@/components/card/PortfolioCard";
import { useGetAllProjectQuery } from "@/services/project";
import SkeletonPortfolio from "@/components/skeleton/SkeletonPortfolio";

interface Props {}

const Portfolio: NextPage<Props> = ({}) => {
  const { data, isLoading } = useGetAllProjectQuery();

  return (
    <section className="bg-gray-100 px-4 py-16" id="showcase">
      <div className="container mx-auto">
        <div className="text-center pb-16">
          <div className="header-wrap">
            <p className="text-green-500 text-md font-semibold">
              SHOWCASE PROYEK
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Dari Ide Menjadi Realitas Digital
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="lg:w-10/12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {isLoading
                ? [1, 2, 3].map((item) => <SkeletonPortfolio key={item} />)
                : data?.data?.map((item, key) => (
                    <PortfolioCard
                      key={key}
                      url={item?.image?.name}
                      name={item.name}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
