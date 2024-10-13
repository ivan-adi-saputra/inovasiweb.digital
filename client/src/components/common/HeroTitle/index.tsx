import { NextPage } from "next";
import { FaStar } from "react-icons/fa";

interface Props {
  name: string;
  subtitle: string;
}

const HeroTitle: NextPage<Props> = ({ name, subtitle }) => {
  return (
    <div>
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        {name}
      </h2>
      <div className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
        <div className="flex items-center">
          <FaStar />
          <span className="ml-2">{subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroTitle;
