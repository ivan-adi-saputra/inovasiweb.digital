import { NextPage } from "next";
import Logo from "@/public/assets/images/logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

interface Props {}

const Client: NextPage<Props> = ({}) => {
  return (
    <div className="mt-14 flex text-center justify-center w-3/5 mx-auto cursor-pointer">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={5}
        loop={true}
        slidesPerView={2}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center h-14">
              <Image
                src={Logo}
                alt="Logo"
                className="h-full w-auto opacity-50"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Client;
