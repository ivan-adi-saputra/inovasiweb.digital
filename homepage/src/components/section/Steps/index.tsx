import { NextPage } from "next";
import Steps1 from "@/public/assets/images/step1.png";
import Steps2 from "@/public/assets/images/step2.png";
import Steps3 from "@/public/assets/images/step3.png";
import StepsCard from "@/components/card/StepsCard";

interface Props {}

const Steps: NextPage<Props> = ({}) => {
  return (
    <section className="px-4" id="steps">
      <div className="container mx-auto space-y-16">
        <StepsCard
          imagePosition="left"
          imageSrc={Steps1}
          title="STRATEGI DIGITAL"
          subtitle="Mulai Perjalanan Digital Anda"
          description="Kami akan melakukan meeting untuk membicarakan fitur, kebutuhan, tujuan, dan target bisnis Anda."
          buttonText="Pelajari Lebih Lanjut"
        />
        <StepsCard
          imagePosition="right"
          imageSrc={Steps2}
          title="PROSES PENGEMBANGAN"
          subtitle="Pembayaran & Progress"
          description="Setelah pembayaran DP, kami akan melakukan meeting rutin setiap beberapa hari atau seminggu sekali untuk melaporkan progress."
          buttonText="Portofolio"
        />
        <StepsCard
          imagePosition="left"
          imageSrc={Steps3}
          title="PENYELESAIAN PROYEK"
          subtitle="Serah Terima & Pelunasan"
          description="Setelah proyek selesai, kami akan menyerahkan aplikasi dan melakukan pelunasan jika pembayaran belum selesai."
          buttonText="Testimonials"
        />
      </div>
    </section>
  );
};

export default Steps;
