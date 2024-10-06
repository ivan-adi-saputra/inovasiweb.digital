"use client";
import { NextPage } from "next";
import Image from "next/image";
import BannerImage from "@/public/assets/images/banner.png";
import Client from "../Client";

interface Props {}

const Banner: NextPage<Props> = ({}) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full lg:w-11/12">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12">
                <div className="pt-20">
                  <p className="text-green-500 text-md font-semibold">
                    SOLUSI DIGITAL
                  </p>
                  <h1 className="mt-5 mb-5 text-4xl font-bold text-black">
                    Wujudkan{" "}
                    <span className="text-purple-600 font-bold">
                      Visi Digital <br />
                      Anda{" "}
                    </span>
                    Bersama Kami
                  </h1>
                  <p className="text-base text-gray-700 leading-7">
                    Kami menyediakan layanan pembuatan website, <br />
                    pengembangan aplikasi, dan optimasi SEO untuk <br />
                    mengembangkan bisnis Anda di era digital.
                  </p>
                  <div className="mt-8">
                    <a
                      href="#"
                      className="bg-purple-600 text-white px-9 py-3 rounded-full border-0 font-medium"
                    >
                      Mulai Sekarang
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 flex justify-center">
                <div className="pt-20">
                  <Image src={BannerImage} alt="" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Client />
      </div>
    </section>
  );
};

export default Banner;
