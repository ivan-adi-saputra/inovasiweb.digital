import { NextPage } from "next";

interface Props {}

const Logo: NextPage<Props> = ({}) => {
  return (
    <div className="flex items-center">
      <div className="flex space-x-1">
        <div className="h-4 w-4 rounded-full bg-purple-600"></div>
        <div className="h-6 w-2 bg-purple-800"></div>
      </div>
      <span className="ml-2 text-2xl font-bold text-gray-800">Inovasi Web</span>
    </div>
  );
};

export default Logo;
