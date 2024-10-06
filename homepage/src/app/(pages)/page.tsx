import Banner from "@/components/section/Banner";
import Benefits from "@/components/section/Benefits";
import Portfolio from "@/components/section/Portfolio";
import Pricing from "@/components/section/Pricing";
import Steps from "@/components/section/Steps";
import { NextPage } from "next";

interface Props {}

const Homepage: NextPage<Props> = ({}) => {
  return (
    <div>
      <Banner />
      <Benefits />
      <Steps />
      <Pricing />
      <Portfolio />
    </div>
  );
};

export default Homepage;
