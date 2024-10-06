import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData | string;
  title: string;
  description: string;
}

const BenefitsCard: NextPage<Props> = ({ image, title, description }) => {
  return (
    <div className="shadow-md p-4">
      <Image src={image} className="w-14 h-14 mb-5" alt="" />
      <h3 className="text-md font-semibold text-gray-900">{title}</h3>
      <p className=" text-[14px]  leading-6 text-gray-700">{description}</p>
    </div>
  );
};

export default BenefitsCard;
