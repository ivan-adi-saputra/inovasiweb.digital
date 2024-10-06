import { formatPrice } from "@/lib/utils";
import { NextPage } from "next";
import { FaCircleCheck } from "react-icons/fa6";

interface Props {
  name: string;
  price: number;
  benefits?: string[];
  isRecommended: boolean;
}

const PricingCard: NextPage<Props> = ({
  name,
  price,
  benefits = [],
  isRecommended,
}) => {
  return (
    <div className="flex-none w-full px-2">
      <div className="relative bg-white rounded-3xl p-8 border border-purple-100">
        {isRecommended && (
          <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-3xl text-sm font-semibold">
            RECOMMENDED
          </div>
        )}
        <p className="text-center text-green-500 text-xl font-semibold">
          {name}
        </p>
        <p className="text-[12px] text-center text-gray-400 mt-2">Mulai</p>
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-5">
          {formatPrice(price)}
        </h1>
        <p className="text-gray-400 mb-3 text-center">Benefits</p>
        {benefits.map((item, key) => (
          <div className="mb-3" key={key}>
            <div className="flex items-center">
              <FaCircleCheck className="text-green-500 mr-3" />
              <p className="text-base font-medium text-gray-900">{item}</p>
            </div>
            <div className="h-px w-full bg-purple-100 mt-2"></div>
          </div>
        ))}

        <a
          href="#"
          className="bg-purple-500 text-white px-9 py-3 rounded-full w-full border-0 font-medium items-center text-center block"
        >
          Konsultasi
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
