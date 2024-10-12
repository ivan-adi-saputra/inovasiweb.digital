"use client";
import React from "react";
import PricingCard from "@/components/card/PricingCard";
import { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import Client from "../Client";
import { useGetAllServiceQuery } from "@/services/service";
import SkeletonService from "../../skeleton/SkeletonService";

interface Props {}

const Pricing: NextPage<Props> = ({}) => {
  const { isLoading, data } = useGetAllServiceQuery();

  return (
    <section
      className="relative mt-24 md:pt-16 overflow-hidden bg-white"
      id="pricing"
    >
      <div className="absolute inset-0 max-h-[620px] bg-purple-800 w-full"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className=" flex flex-wrap">
          <div className="lg:w-5/12 w-full mt-20">
            <p className="text-sm font-medium text-gray-300">
              INVESTASI TERBAIK UNTUK BISNIS ANDA
            </p>
            <h2 className="text-4xl font-bold text-white mt-2">
              Mulai Perjalanan <br /> Digital Anda
            </h2>
            <p className="text-base font-normal text-purple-300 mt-8 leading-relaxed">
              Pelajari cara membangun website yang menarik, aplikasi <br />
              yang canggih, dan optimalkan SEO untuk meningkatkan <br />
              visibilitas bisnis Anda di mesin pencari.
            </p>
            <p className="mt-12">
              <a
                href="#"
                className="bg-green-500 text-white px-9 py-3 rounded-full border-0 font-medium me-3"
              >
                Layanan Kami
              </a>
            </p>
          </div>
          <div className="lg:w-7/12 w-full  mt-20 md:mt-0">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-300 ease-in-out">
                {isLoading ? (
                  [1, 2].map((item) => <SkeletonService key={item} />)
                ) : (
                  <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={data?.data?.length === 1 ? 1 : 2}
                    spaceBetween={0}
                    navigation={data?.data && data?.data?.length > 1}
                    pagination={{
                      clickable: data?.data && data?.data?.length > 1,
                    }}
                    breakpoints={{
                      200: {
                        slidesPerView: 1,
                      },
                      1024: {
                        slidesPerView: data?.data?.length === 1 ? 1 : 2,
                      },
                    }}
                  >
                    {data?.data?.map((data, index) => (
                      <SwiperSlide key={index}>
                        <PricingCard
                          name={data.name}
                          price={data.price}
                          benefits={data.benefits}
                          isRecommended={data.isRecomended}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="pb-16">
          <div className="w-full flex justify-center">
            <Client />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
