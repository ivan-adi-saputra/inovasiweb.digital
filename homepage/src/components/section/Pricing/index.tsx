"use client";
import PricingCard from "@/components/card/PricingCard";
import { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import Client from "../Client";

interface Props {}

const Pricing: NextPage<Props> = ({}) => {
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
                <Swiper
                  modules={[Navigation, Pagination]}
                  slidesPerView={2}
                  spaceBetween={0}
                  navigation
                  pagination={{ clickable: true }}
                  breakpoints={{
                    200: {
                      slidesPerView: 1,
                    },
                    1024: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  {[1, 2, 3, 4, 5].map((card, index) => (
                    <SwiperSlide key={index}>
                      <PricingCard
                        name="Web Development"
                        price={1500000}
                        benefits={[
                          "Konsultasi 1",
                          "Konsultasi 2",
                          "Konsultasi 3",
                          "Konsultasi 4",
                          "Konsultasi 5",
                          "Konsultasi 6",
                        ]}
                        isRecommended
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
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
