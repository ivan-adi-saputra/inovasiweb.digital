import { NextPage } from "next";
import IcGlobe from "@/public/assets/images/ic_globe.png";
import IcGlobe1 from "@/public/assets/images/ic_globe-1.png";
import IcGlobe2 from "@/public/assets/images/ic_globe-2.png";
import IcGlobe3 from "@/public/assets/images/ic_globe-3.png";
import BenefitsCard from "@/components/card/BenefitsCard";

interface Props {}

const Benefits: NextPage<Props> = ({}) => {
  return (
    <section className="px-4 mb-24" id="benefits">
      <div className="container mx-auto">
        <div className="text-center pb-16">
          <div className="w-full">
            <p className="text-green-500 text-md font-semibold">
              OUR SUPER BENEFITS
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Build Faster & Smarter
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <BenefitsCard
            image={IcGlobe}
            title={"Custom Solutions"}
            description={
              "Solusi website dan aplikasi sesuai kebutuhan bisnis Anda."
            }
          />
          <BenefitsCard
            image={IcGlobe2}
            title={"Cutting-Edge Technology"}
            description={
              "Teknologi terbaru untuk performa cepat, aman, dan andal."
            }
          />
          <BenefitsCard
            image={IcGlobe3}
            title={"SEO Optimization"}
            description={
              "Optimalkan website agar lebih mudah ditemukan di mesin pencari."
            }
          />
          <BenefitsCard
            image={IcGlobe1}
            title={"Support & Maintenance"}
            description={
              "Dukungan penuh dan perawatan rutin untuk kelancaran operasional."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
