import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";

interface Props {
  imagePosition: "left" | "right";
  imageSrc: StaticImageData | string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

const StepsCard: NextPage<Props> = ({
  imagePosition,
  imageSrc,
  title,
  subtitle,
  description,
  buttonText,
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        imagePosition === "right" ? "lg:flex-row-reverse" : ""
      } items-center`}
    >
      <div className="w-full lg:w-6/12 text-center">
        <Image src={imageSrc} className="w-full" alt={title} />
      </div>
      <div className="w-full lg:w-6/12 lg:px-16 mt-8 lg:mt-0 text-left">
        <p className="text-green-500 text-md font-semibold">{title}</p>
        <h2 className="text-3xl font-bold text-gray-900">{subtitle}</h2>
        <p className="text-base text-gray-700 leading-7 mt-5">{description}</p>
        <p className="mt-5">
          <a
            href="#"
            className="bg-purple-100 text-purple-600 px-9 py-3 rounded-full border-0 font-medium"
          >
            {buttonText}
          </a>
        </p>
      </div>
    </div>
  );
};

export default StepsCard;
